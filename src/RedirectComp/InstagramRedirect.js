import React,{ Component } from "react";

import CircleLoader from "react-spinners/BeatLoader";


class InstagramRedirect extends Component{
    componentDidMount(){
        let token = window.location.search
        window.opener.postMessage({token:{
            accessToken : token.substring(6,token.lenght),
            type : "Instagram"
        }})
        window.opener.focus()
        //window.close()        
    }

    render(){
        return(
            <div>
                <CircleLoader
                    size={20}
                    width={50}
                    color={"#2E4158"}
                    loading={"true"}
                />
            </div>            
        )
    }
}

export default InstagramRedirect