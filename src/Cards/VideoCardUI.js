import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Styles/card-styles.css'


const Cards = props =>{
    return(

    <Card className="text-center shadow" style={{marginLeft: '50px'}}>
        <video controls width="320" src={props.vidsrc} type="video/mp4"/>
        <Card.Body className="text-dark">
            <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.text}</Card.Text>
    <Card.Text>{props.timestamp}</Card.Text>
    <i className=" far fa-heart"  style={{fontSize: "40px"}}></i>
    <i className=" far fa-comment" style={{fontSize: "40px"}}></i>
    <i className=" far fa-paper-plane" style={{fontSize: "40px"}}></i>
        </Card.Body>
    </Card>
    );
}

export default Cards;