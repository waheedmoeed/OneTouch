import React, {  Component } from 'react'
import { Link } from 'react-router-dom';

import  {NavLink} from 'react-router-dom';
import "../Styles/Authorization/MainAuth.css"


class SignInForm extends Component{
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }



    render(){
        return(
            <div class="App">
                    <div className = "App__Aside"></div>           
                    <div className = "App__Form">                   
                        <div className="PageSwitcher">                
                            <NavLink to = "/sign-in"   activeClassName = "PageSwitcher__Item--Active" className = "PageSwitcher__Item"> Sign In </NavLink>
                            <NavLink exact to = "/"   activeClassName = "PageSwitcher__Item--Active" className = "PageSwitcher__Item  "> Sign Up </NavLink>              
                        </div>                   
                        <div className = "FormTitle">                
                            <NavLink to= "/sign-in"  activeClassName = "FormTitle__Link--Active"    className ="FormTitle__Link"> Sign In</NavLink>                
                            or                 
                            <NavLink exact to ="/" className ="FormTitle__Link "  activeClassName = "FormTitle__Link--Active"> Sign Up</NavLink>
                        </div>

            <div className = "FormCenter">

            <form className = "FormFields" onSubmit = {this.handleSubmit}>
                   
                  

                   <div className = "FormField">

                       <label className = "FormField__Label" htmlFor="email">Email Address</label>
                       <input 
                           type = "email" id = "email" className = "FormField__Input" placeholder = "Enter your Email ID" 
                           value={this.state.email} onChange={this.handleChange} name="email">
                       </input>
                   
                  </div> 

                  <div className = "FormField">

                       <label className = "FormField__Label" htmlFor="password">Password</label>
                       <input type = "password" id = "password" className = "FormField__Input" placeholder = "Enter your Password"
                        name="password"  value={this.state.password} onChange={this.handleChange}>

                        </input>
                   
                  </div> 


                  <div className= "FormField">
                        <button className ="FormField__Button mr-20">Sign In</button>

                       <Link exact to = "/" className = "FormField__Link" > Create an Account </Link>
                  </div>


            </form> 

        </div>
        </div>
        </div>
        );
    
 }
}


export default SignInForm;