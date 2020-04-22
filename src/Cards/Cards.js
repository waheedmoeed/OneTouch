import React,{Component} from 'react';
import Cds from './CardUI';
import img1 from '../ibzy.jpg';
import img2 from '../iimg2.JPG';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Cards extends Component {
    render(){
        return(
            <Jumbotron fluid>
            <div className="container-fluid justify-content-center">
                <div className="row flex-row flex-nowrap">
                    <div className="col-md-3">
                        <Cds imgsrc={img1} title="Test"/>
                    </div>
                    <div className="col-md-3">
                        <Cds imgsrc={img2} title="Test2"/>
                    </div>
                    <div className="col-md-3">
                        <Cds imgsrc={img1} title="Test3"/>
                    </div>
                    <div className="col-md-3">
                        <Cds imgsrc={img1} title="Test3"/>
                    </div>
                    <div className="col-md-3">
                        <Cds imgsrc={img1} title="Test3"/>
                    </div>
                </div>

            </div>
            </Jumbotron>
        );
    }
}

export default Cards;