import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
import Axios from 'axios'

import {setInstAccessToken} from '../Store/inst/action'
import { connect } from 'react-redux';



class InstConnect extends Component{
  constructor(props){
    super(props)
    //Check if token is available are not in case it is available button will be disabled
    this.connected = false//(this.props.token)?true:false
    this.text = "Connect"//(this.props.token)?"Connect":"Connected"
    this.token= ""
    this.openWindow = this.openWindow.bind(this)
    this.InstAccessToken = this.InstAccessToken.bind(this)
    this.receiveMessage = this.receiveMessage.bind(this)
  }

  componentDidMount(){
    window.addEventListener("message",this.receiveMessage, false);
  }
  openWindow(){
    let url = "https://api.instagram.com/oauth/authorize/?client_id="+process.env.REACT_APP_INSTAGRAM_CLIENT_KEY+"&redirect_uri=https://localhost:3000/instagaram-redirect/&scope=user_profile,user_media&response_type=code"
    let instRedirect = window.open(url,"width=300, height=300")
    instRedirect.focus()
  }

  receiveMessage(event){
    // Do we trust the sender of this message?  (might be
    // different from what we originally opened, for example).
    if(event.data.token){
      this.token = event.data.token
      if( this.token.type === "Instagram"){
        this.InstAccessToken()
      }
    }        
  }

    InstAccessToken(){
        const user = {
            userId:"5e85b17b44af9a3a64bdf841",
            tw_token:this.token,
            token:""//Auth token from cookies
        }
        Axios.post("http://localhost:5050/validate_inst_token/", user).then((response)=>{
            if(response.token){
                //Todo: Hide loader/spinner
                this.props.setInstAccessToken()
            }else{
                //TODO: show the error and close the loader/spinner
                console.log(response)
            }
          }).catch((error)=>{
            console.log(error)            
          })
    }



  render(){
    return(
          <Button onClick={this.InstAccessToken} disabled={this.connected} className="primary" style={{float: "right"}}>{this.text}</Button>
      )
    }
}

const mapStateToProps = (state) => ({
    // ... computed data from state and optionally ownProps
    token: state.instagram.token,
})

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    setInstAccessToken
  }

export default connect(mapStateToProps,mapDispatchToProps)(InstConnect);