import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Styles/card-styles.css'


const Cards = props =>{
    return(

    <Card className="text-center shadow">
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body className="text-dark">
            <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    );
}

export default Cards;