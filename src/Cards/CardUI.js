import React from 'react';
import '../Styles/card-styles.css'

const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} className="card-img-top" alt="" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    {props.title}
                </h4>
                <p className="card-text text-secondary">
                    lorem ipsum Waheed 
                </p>
                <a href="test" className="btn btn-outline-success">Go Somewhere</a>
            </div>
        </div>
    );
}

export default Card;