import React, {Component} from 'react';

import SideNavBar from '../CommonComp/SideNavBar'

class Inst_Main extends Component{
    render(){
        return(
            <>
            <SideNavBar/>
            <div className="main">
            <h1>this is fb home</h1>
            </div>
            </>
        )
    }
}

export default Inst_Main