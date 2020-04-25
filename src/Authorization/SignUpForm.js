import React, {  Component } from 'react'
import { Link } from 'react-router-dom';

import  {NavLink} from 'react-router-dom';
import "../Styles/Authorization/MainAuth.css"
<<<<<<< HEAD
let axios = require("axios");
  class SignUpForm extends Component{

        constructor(props) {
          super(props);
  
          this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '', 
            
=======


class SignUpForm extends Component{

     constructor() {
          super();
  
          this.state = {
              email: '',
              password: '',
              fname: '',
              lname: '',
              hasAgreed: false
>>>>>>> master
          };
  
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }
<<<<<<< HEAD

      handleChange(e) {
        let target = e.target;
          let value = target.type === 'checkbox' ? target.checked : target.value;
          let name = target.name;
          this.setState({
            [name]: value
          });
          
      }
  
      handleSubmit = (event) => {
        event.preventDefault();
        
        // const data = new FormData(event.target);
       
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    }
  axios.post("https://onetouch-portal.herokuapp.com/createUser/",{
      firstName:this.state.fname ,
      lastName:this.state.lname,
	    email:this.state.email,
	    password:this.state.password,
      // redirect_uri:"https://localhost:3000/instagaram-redirect/",
      
  }, config).catch((err) => {
      console.log(err)
      // logger.error(err)
      // res.send(err)
  });

        

        console.log("User Successfully Added");
      }


      
    render(){
        return(
            <div className="App">
=======
  
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
>>>>>>> master
                    <div className = "App__Aside"></div>           
                    <div className = "App__Form">                   
                        <div className="PageSwitcher">                
                            <NavLink to = "/sign-in"   activeClassName = "PageSwitcher__Item--Active" className = "PageSwitcher__Item"> Sign In </NavLink>
<<<<<<< HEAD
                            <NavLink exact to = "/"   activeClassName = "PageSwitcher__Item--Active" className = "PageSwitcher__Item  "> Sign Up </NavLink>              
=======
                            <NavLink exact to = "/sign-up"   activeClassName = "PageSwitcher__Item--Active" className = "PageSwitcher__Item  "> Sign Up </NavLink>              
>>>>>>> master
                        </div>                   
                        <div className = "FormTitle">                
                            <NavLink to= "/sign-in"  activeClassName = "FormTitle__Link--Active"    className ="FormTitle__Link"> Sign In</NavLink>                
                            or                 
<<<<<<< HEAD
                            <NavLink exact to ="/" className ="FormTitle__Link "  activeClassName = "FormTitle__Link--Active"> Sign Up</NavLink>
=======
                            <NavLink exact to ="/sign-up" className ="FormTitle__Link "  activeClassName = "FormTitle__Link--Active"> Sign Up</NavLink>
>>>>>>> master
                        </div>                     

            <div className = "FormCenter">

<<<<<<< HEAD
            <form onSubmit={this.handleSubmit} className="FormFields" >
=======
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit = {this.handleSubmit}>
>>>>>>> master
                   
                  <div className = "FormField">

                       <label className = "FormField__Label" htmlFor="fname">First Name</label>
                       <input 
<<<<<<< HEAD
                            type = "text" id = "fname" className = "FormField__Input" minLength="2" placeholder = "Enter your First Name" 
                            name="fname" value={this.state.fname} onChange={this.handleChange} required>
=======
                            type = "text" id = "fname" className = "FormField__Input" placeholder = "Enter your First Name" 
                            name="fname" value={this.state.fname} onChange={this.handleChange}>
>>>>>>> master

                       </input>
                   
                  </div> 

                   <div className = "FormField">

                       <label className = "FormField__Label" htmlFor="lname">Last Name</label>
                       <input 
<<<<<<< HEAD
                          type = "text" id = "lname" className = "FormField__Input" minLength="2" placeholder = "Enter your Last Name"
                           name="lname" value={this.state.lname} onChange={this.handleChange} noValidate required>
=======
                          type = "text" id = "lname" className = "FormField__Input" placeholder = "Enter your Last Name"
                           name="lname" value={this.state.lname} onChange={this.handleChange}>
>>>>>>> master

                        </input>
                   
                  </div> 

                   <div className = "FormField">

<<<<<<< HEAD
                       <label className = "FormField__Label" htmlFor="email" >Email Address</label>
                       <input 
                            type = "email" id = "email" className = "FormField__Input" placeholder = "Enter your Email ID"
                            name="email" value={this.state.email} onChange={this.handleChange} noValidate required>
=======
                       <label className = "FormField__Label" htmlFor="email">Email Address</label>
                       <input 
                            type = "email" id = "email" className = "FormField__Input" placeholder = "Enter your Email ID"
                            name="email" value={this.state.email} onChange={this.handleChange}>
>>>>>>> master

                        </input>
                   
                  </div> 

                  <div className = "FormField">

                       <label className = "FormField__Label" htmlFor="password">Password</label>
                       <input 
                       
<<<<<<< HEAD
                             type = "password" id = "password" className = "FormField__Input" minLength="8" placeholder = "Enter your Password"
                             name="password" value={this.state.password} onChange={this.handleChange} noValidate required>
=======
                             type = "password" id = "password" className = "FormField__Input" placeholder = "Enter your Password"
                             name="password" value={this.state.password} onChange={this.handleChange}>
>>>>>>> master

                        </input>
                   
                  </div> 

                  <div className= "FormField">
                       <label className = "FormField__CheckboxLabel"></label>
<<<<<<< HEAD
                       <input className = "FormField__Checkbox" type="checkbox" value={this.state.checked} onChange={this.handleChange} name="checked" noValidate required/>I agree all statements in
                       <a href ="#test" className = "FormField__TermsLink">terms of service</a>
=======
                       <input classname = "FormField__Checkbox" type="checkbox" value={this.state.hasAgreed} onChange={this.handleChange}name="hasAgreed"/>I agree all statements in
                       <a href ="#" className = "FormField__TermsLink">terms of service</a>
>>>>>>> master
                     
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