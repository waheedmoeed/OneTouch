import React, {  Component } from 'react'
import { Link } from 'react-router-dom';

import  {NavLink} from 'react-router-dom';
import "../Styles/Authorization/MainAuth.css"


class SignUpForm extends Component{

     constructor() {
          super();
  
          this.state = {
              email: '',
              password: '',
              fname: '',
              lname: '',
              hasAgreed: false
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
                            <NavLink exact to = "/sign-up"   activeClassName = "PageSwitcher__Item--Active" className = "PageSwitcher__Item  "> Sign Up </NavLink>              
                        </div>                   
                        <div className = "FormTitle">                
                            <NavLink to= "/sign-in"  activeClassName = "FormTitle__Link--Active"    className ="FormTitle__Link"> Sign In</NavLink>                
                            or                 
                            <NavLink exact to ="/sign-up" className ="FormTitle__Link "  activeClassName = "FormTitle__Link--Active"> Sign Up</NavLink>
                        </div>                     

            <div className = "FormCenter">

            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit = {this.handleSubmit}>
                   
                  <div className = "FormField">

                       <label className = "FormField__Label" htmlFor="fname">First Name</label>
                       <input 
                            type = "text" id = "fname" className = "FormField__Input" placeholder = "Enter your First Name" 
                            name="fname" value={this.state.fname} onChange={this.handleChange}>

                       </input>
                   
                  </div> 

                   <div className = "FormField">

                       <label className = "FormField__Label" htmlFor="lname">Last Name</label>
                       <input 
                          type = "text" id = "lname" className = "FormField__Input" placeholder = "Enter your Last Name"
                           name="lname" value={this.state.lname} onChange={this.handleChange}>

                        </input>
                   
                  </div> 

                   <div className = "FormField">

                       <label className = "FormField__Label" htmlFor="email">Email Address</label>
                       <input 
                            type = "email" id = "email" className = "FormField__Input" placeholder = "Enter your Email ID"
                            name="email" value={this.state.email} onChange={this.handleChange}>

                        </input>
                   
                  </div> 

                  <div className = "FormField">

                       <label className = "FormField__Label" htmlFor="password">Password</label>
                       <input 
                       
                             type = "password" id = "password" className = "FormField__Input" placeholder = "Enter your Password"
                             name="password" value={this.state.password} onChange={this.handleChange}>

                        </input>
                   
                  </div> 

                  <div className= "FormField">
                       <label className = "FormField__CheckboxLabel"></label>
                       <input classname = "FormField__Checkbox" type="checkbox" value={this.state.hasAgreed} onChange={this.handleChange}name="hasAgreed"/>I agree all statements in
                       <a href ="#" className = "FormField__TermsLink">terms of service</a>
                     
                  </div>

                  <div className="FormField">
                  <button className="FormField__Button mr-20" type="submit">Sign up</button> <Link to="/sign-in" className="FormField__Link">Already have an account</Link>
              </div>


            </form> 

        </div>
        </div>
        </div>
        );
    
 }
}


export default SignUpForm;