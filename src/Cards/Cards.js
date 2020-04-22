import React,{Component} from 'react';
import Cds from './CardUI';
import img1 from '../ibzy.jpg';
import img2 from '../iimg2.JPG';

class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Cds imgsrc={img1} title="Test"/>
                    </div>
                    <div className="col-md-4">
                        <Cds imgsrc={img2} title="Test2"/>
                    </div>
                    <div className="col-md-4">
                        <Cds imgsrc={img1} title="Test3"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Cards;