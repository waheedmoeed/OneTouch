import React, {Component} from 'react';
import { connect } from 'react-redux'

import Axios from 'axios'

import ClockLoader from "react-spinners/BeatLoader";
//Actions on store
import {setInstAccessToken} from '../Store/inst/action'
import SideNavBar from '../CommonComp/SideNavBar'
import SocialCard from '../Main/SocialCard';
import Home from './InstComp/Home'
import ErrorComp from '../CommonComp/ErrorComp';


class Inst_Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            errorOccur : false
        }
        this.loading=false
    }

    //get tokens from server and store them in redux store
    async getAccessTokens(){
        //Todo: Change it to set all tokens in store and change id of user (get it from cookies)
        Axios.get("http://localhost:5050/inst_token/5e88cb86ec33c2001732d7f6").then((response)=>{
            if(response.status === 200){                
                this.props.setAccessToken({
                    tried :true,
                    token: response
                })
            }else{
                //If no token founded in response
                this.props.setAccessToken({
                    tried :true,
                    token:{
                        accessToken: "",
                        userId: ""
                    }
                })
            }
          }).catch((error)=>{
            this.setState({
                errorOccur: true
            })
          })
    }


    render(){
        let comp = ""
        this.loading= false
        if(this.state.errorOccur) {
            comp = <ErrorComp></ErrorComp>
        }else{
            //If request to get accesstoken from server alredy done
            console.log(this.props.tried)
            if(this.props.tried){
                //If token is not present after doing request to server
                if(this.props.token.accessToken===""){                    
                    comp = <SocialCard icon="fab fa-instagram" color="rgb(193,53,132)" title="Instagram Basic API" platform="instagram" text="Basic engament with your account like getting posts,profile etc"/>
                }else{
                    console.log("Home called")
                    comp = <Home></Home>
                }
            }else{
                console.log("Token getting")
                this.loading = true //start spinner
                this.getAccessTokens()
            }
        }
        return(
            <>
            <SideNavBar/>
            <div className="main">
                <ClockLoader
                    size={20}
                    width={50}
                    color={"#66DAC7"}
                    loading={this.loading}                    
                />
                {comp}
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    // ... computed data from state and optionally ownProps
    token: state.instagram.token,
    tried: state.instagram.tried
})
  
const mapDispatchToProps = {
    // ... normally is an object full of action creators
    setInstAccessToken
  }
  

export default   connect(mapStateToProps,mapDispatchToProps) (Inst_Main)