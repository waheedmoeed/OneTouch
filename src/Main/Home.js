import React, {Component} from 'react';

import {Container} from "react-bootstrap"
import SideNavBar from '../CommonComp/SideNavBar'

import '../Styles/home.css'
import SocialSignIn from '../Authorization/SocialSignIn';

class Home extends Component{
    render(){
        return(
            <>
            <SideNavBar/>
            <div className="main">
                <Container>
                   <SocialSignIn/>
                </Container>
            </div>
            </>
        )
    }
}

export default Home