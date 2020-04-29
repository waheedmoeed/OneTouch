import React, {Component} from 'react';

import SideNavBar from '../CommonComp/SideNavBar'
import SocialCard from './SocialCard'
import {Container} from 'react-bootstrap'

import '../Styles/home.css'

class Home extends Component{
    render(){
        let text ="Some quick example text to build on the card title and make up the bulk of the cards content."
        return(
            <>
            <SideNavBar/>
                <Container>                    
                    <h3 style={{padding:"20px"}}>Most Popular</h3>
                    <div className="panel">
                    <SocialCard icon="fab fa-facebook-square" color="#3b5998" title="Facebook Basic API" platform="facebook" text={text}/>
                    <SocialCard icon="fab fa-twitter-square" color="#00acee" title="Twitter Basic API" platform="twitter" text={text}/>
                    <SocialCard icon="fab fa-instagram" color="rgb(193,53,132)" title="Instagram Basic API" platform="instagram" text={text}/>
                    <SocialCard icon="fab fa-pinterest-square" color="#c8232c" title="Pinterest" platform = "pinterest" text={text}/>                   
                    </div>
                </Container>                   
            </>
        )
    }
}

export default Home