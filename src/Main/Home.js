import React, {Component} from 'react';

import SideNavBar from '../CommonComp/SideNavBar'
import SocialCard from './SocialCard'
import {Container,Row, Col} from 'react-bootstrap'
import InstaMedia from '../Social/InstComp/InstaMedia'

import '../Styles/home.css'
import SocialSignIn from '../Authorization/SocialSignIn';

class Home extends Component{
    render(){
        let text ="Some quick example text to build on the card title and make up the bulk of the cards content."
        return(
            <>
            <SideNavBar/>
            <div className="main">
                <Container>
                    <h3 style={{paddingTop:"20px"}}>Most Popular</h3>
                    <Row className="panel">                            
                        <Col lg="2">
                        <SocialCard icon="fab fa-facebook-square"  color="#3b5998" title="Facebook Basic API" text={text}/>
                        </Col>
                        <Col lg="1"></Col>
                        <Col lg="2">
                        <SocialCard icon="fab fa-twitter-square" color="#00acee" title="Twitter Basic API" text={text}/>
                        </Col>
                        <Col lg="1"></Col>
                        <Col lg="2" className="text-center">
                        <SocialCard icon="fab fa-instagram" loc="/InstaG" name="Instagram" color="rgb(193,53,132)" title="Instagram Basic API" text={text}/>
                        </Col>
                        <Col lg="1"></Col>
                        <Col lg="2">
                        <SocialCard icon="fab fa-pinterest-square" color="#c8232c" title="Pinterest" text={text}/>
                        </Col>                             
                        
                    </Row> 
                </Container>                   
            
            
            
            </div>
            </>
        )
    }
}

export default Home