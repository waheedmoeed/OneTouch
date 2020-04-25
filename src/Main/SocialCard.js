import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import '../Styles/socialcard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class SocialCard extends Component{
    render(){
        return(
            <>
            <Card style={{ width: '16rem' }} border='light'>
                <Card.Body>

                <Button variant="primary" href={this.props.loc} >{this.props.name}</Button>
                    <span className="icon" style={{color:this.props.color ,marginLeft: "40%"}}>
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