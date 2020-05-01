import React from 'react';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import '../Styles/card-styles.css'


const Cards = props =>{
    return(
    <div>
    <Card className="shadow" style={{marginLeft: '50px', width: "94%"}}>
    <img style={{borderRadius: "50%",marginLeft: "5%",marginTop:"5%"}} width="100px" height="100px" src={props.imgsrc}/>
        <div style={{marginTop:"-10%",marginLeft: "15%"}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{padding: "0"}}>Posts: {props.noPost} Followers:{props.followers} Follows:{props.follows} </Card.Text>
        
        <Card.Body className="text-dark">
        <Card.Title>{props.full_name}</Card.Title>   
    <Card.Text style={{padding: "0"}} >{props.text}</Card.Text>
        </Card.Body>
        </div>
    </Card>
    </div>
    );
}

export default Cards;