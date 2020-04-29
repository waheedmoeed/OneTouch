import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import '../Styles/socialcard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Alert} from 'react-bootstrap'

import InstConnect from '../Authorization/InstConnect';
import FbConnect from '../Authorization/FbConnect';
import TwConnect from '../Authorization/TwConnect';
import PinConnect from '../Authorization/PinConnect';

class SocialCard extends Component{
    constructor(props){
        super(props);
        this.state= {
            alert: false
        }
        this.showalert = this.showalert.bind(this)
        this.alertMessage = "Failed to connect.Something went wrong!!!"
    }

    showalert(msg){
        this.alertMessage = msg
        this.setState({
            alert:true
        })
    }

    hidealert(){
        this.setState({
            alert:false
        })
    }

    render(){
        let alert
        if(this.state.alert){
        alert= <Alert key="1" onClose={() => this.hidealert()} dismissible variant="danger">{this.alertMessage}</Alert> 
        }
        let connect;
        if(String(this.props.platform) === "facebook"){
            connect= <FbConnect/>
        }else if(String(this.props.platform) ==="twitter"){
            connect= <TwConnect/>
        }else if(String(this.props.platform)==="instagram"){
            connect= <InstConnect showerror={this.showalert}/>
        }else if(String(this.props.platform) === "pinterest"){
            connect =<PinConnect/>
        }
        return(
            <>
            <Card style={{ width: '16rem', margin:'5px' }} className="card" border='light'>
                <Card.Body>
                    {alert}                                
                    <span className="icon" style={{color:this.props.color ,marginLeft: "40%"}}>
                        <i className={this.props.icon}/>
                    </span>
                    <Card.Title style={{"textAlign":'center'}}>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}                                            
                    </Card.Text>
                    {connect}
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default SocialCard