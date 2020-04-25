import React, {Component} from 'react';

class SocialSignIn extends Component{
  constructor(props){
    super(props)
    this.token= ""
  }

  componentDidMount(){
    window.addEventListener("message",this.receiveMessage, false);
  }

  openInstagramWindow(){
    let url = "https://api.instagram.com/oauth/authorize/?client_id="+process.env.REACT_APP_INSTAGRAM_CLIENT_KEY+"&redirect_uri=https://localhost:3000/instagaram-redirect/&scope=user_profile,user_media&response_type=code"
    let instRedirect = window.open(url,"width=300, height=300")
    instRedirect.focus()
  }
  receiveMessage(event){
    // Do we trust the sender of this message?  (might be
    // different from what we originally opened, for example).
    if(event.data.token){
        this.token = event.data.token
        console.log(this.token)
    }        
  }

  render(){
        return(
          <button onClick={this.openInstagramWindow}>Twitter Sign In</button>
        )
    }
}

export default SocialSignIn;