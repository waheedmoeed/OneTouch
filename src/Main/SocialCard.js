import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'

import '../Styles/socialcard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class SocialCard extends Component{
    render(){
        return(
            <>
            <Card style={{ width: '16rem' }} border='light'>
                <Card.Body>
                    <span className="icon" style={{color:this.props.color}}>
                        <i className={this.props.icon}/>
                    </span>
                    <Card.Title style={{"textAlign":'center'}}>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}                    
                    </Card.Text>
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default SocialCard