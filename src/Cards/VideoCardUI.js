import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Styles/card-styles.css'


const Cards = props =>{
    return(

    <Card className="text-center shadow" style={{marginLeft: '50px'}}>
        <video controls width="320" src={props.vidsrc} type="video/mp4"/>
        <Card.Body className="text-dark">
            <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.text}</Card.Text>
    <Card.Text>{props.timestamp}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    );
}

export default Cards;