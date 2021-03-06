import React, {Component} from 'react';
import {Button} from 'react-bootstrap'

import {verfiyTwToken} from './VerifyToken'


class TwConnect extends Component{
  constructor(props){
    super(props)
    this.token= ""
    this.openWindow = this.openWindow.bind(this)
    this.getTwAccessToken = this.getTwAccessToken.bind(this)
  }

  componentDidMount(){
    window.addEventListener("message",this.receiveMessage, false);
  }
  openWindow(){
    alert("Coming soon")
  }

  receiveMessage(event){
    // Do we trust the sender of this message?  (might be
    // different from what we originally opened, for example).
    if(event.data.token){
      this.token = event.data.token
      if( this.token.type === "Facebook"){
        this.getTwAccessToken()
      }
    }        
  }

  getTwAccessToken(){
    verfiyTwToken()
  }


  render(){
    return(
          <Button onClick={this.openWindow} className="primary" style={{float: "right", marginRight:"10px"}}>Connect</Button>
      )
    }
}

export default TwConnect;