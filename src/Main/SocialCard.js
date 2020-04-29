import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'

import '../Styles/socialcard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import InstConnect from '../Authorization/InstConnect';
import FbConnect from '../Authorization/FbConnect';
import TwConnect from '../Authorization/TwConnect';
import PinConnect from '../Authorization/PinConnect';

class SocialCard extends Component{
    render(){
        let connect;
        if(String(this.props.platform) === "facebook"){
            connect= <FbConnect/>
        }else if(String(this.props.platform) ==="twitter"){
            connect= <TwConnect/>
        }else if(String(this.props.platform)==="instagram"){
            connect= <InstConnect/>
        }else if(String(this.props.platform) === "pinterest"){
            connect =<PinConnect/>
        }
        return(
            <>
            <Card style={{ width: '16rem', margin:'5px' }} className="card" border='light'>
                <Card.Body>
                    <span className="icon" style={{color:this.props.color}}>
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