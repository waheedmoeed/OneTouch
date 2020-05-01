import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
import Axios from 'axios'
import ClockLoader from "react-spinners/BeatLoader";
import Cookies from  'js-cookie'

import {storeBasicInstToken} from './StoreOAuthToken'

import {setInstBasicAccessToken} from '../Store/inst/action'
import { connect } from 'react-redux';



class InstConnect extends Component{
  constructor(props){
    super(props)
    this.state={
        isProcessing:false
    }
    //Check if token is available are not in case it is available button will be disabled
    this.code= ""
    this.openWindow = this.openWindow.bind(this)
    this.InstAccessToken = this.InstAccessToken.bind(this)
    this.receiveMessage = this.receiveMessage.bind(this)
  }

  componentDidMount(){
    window.addEventListener("message",this.receiveMessage, false);
  }
  openWindow(){
    this.setState({isProcessing:true})
    let url = "https://api.instagram.com/oauth/authorize/?client_id="+process.env.REACT_APP_INSTAGRAM_CLIENT_KEY+"&redirect_uri=https://localhost:3000/instagaram-redirect/&scope=user_profile,user_media&response_type=code"
    let instRedirect = window.open(url,"width=300, height=300")
    instRedirect.focus()
  }

  receiveMessage(event){
    // Do we trust the sender of this message?  (might be
    // different from what we originally opened, for example).
    if(event.data.token){
      this.code = event.data.token
      if( this.code.type === "Instagram" && this.props.token.accessToken===""){
        this.InstAccessToken()
      }
    }        
  }

  //Get short term access token from the server by passing the code got from the redirect_url and set it in the store
    InstAccessToken(){
        const user = {
            userId:Cookies.get("id"),
            tw_token:this.code.accessToken,
            token:Cookies.get("sessionToken")//Auth token from cookies
        }
        Axios.post("http://localhost:5050/validate_inst_token/", user).then(async (response)=>{
            if(response.data.token !== undefined){
                let shortTokenData = JSON.parse(response.data.token)
                //Call the api to store long term access token in db and send bacck long term token 
                //store long term tokken in store if request is suucessfull 
                storeBasicInstToken(shortTokenData.access_token).then(()=>{
                    if(response.data.token !== undefined){
                        this.setTokenInStore(response.data.token,shortTokenData.user_id)    
                    }else{
                        this.setTokenInStore(shortTokenData.access_token, shortTokenData.user_id) 
                    }
                })
            }else{
                //show the error and close the loader/spinner
                if(response.data.error.Unauthorization !== undefined){
                    this.props.showerror("It seems your session is expired.")
                    this.setState({isProcessing:false})
                }else{
                    this.props.showerror("Failed to connect.Something went wrong!!!")
                    console.error(response.data)
                    this.setState({isProcessing:false})
                }
            }
          }).catch((error)=>{
            this.props.showerror("Failed to connect.Something went wrong!!!")
            console.error(error)  
            this.setState({isProcessing:false})          
          })
    }

    setTokenInStore(token, id){
        this.props.setInstBasicAccessToken({
            tried:true,
              token : {
                  accessToken: token,
                  userId: id
              }  
        })
        this.setState({isProcessing:false})
    }



  render(){
      let comp;
      if(this.state.isProcessing){          
          comp = <div style={{justifyContent:"center", display:"flex"}}><ClockLoader
                    
                    size={20}
                    width={50}
                    color={"#2E4158"}
                    loading={this.loading}                    
                />
                </div>
      }else{             
        comp = (this.props.token.accessToken==="")?
            <Button onClick={this.openWindow} className="primary" style={{float: "right", marginRight:"10px"}}>Connect</Button>
            :
            <Button onClick={this.openWindow} disabled={true} className="primary" style={{float: "right", marginRight:"10px"}}>Connected</Button>
      }
    return(
        <>
        {comp}
        </>
      )
    }
}

const mapStateToProps = (state) => ({
    // ... computed data from state and optionally ownProps
    token: state.instagram.basicToken.token,
})

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    setInstBasicAccessToken
  }

export default connect(mapStateToProps,mapDispatchToProps)(InstConnect);