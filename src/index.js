import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Redirect} from 'react-router-dom'

import SignUpForm from './Authorization/SignUpForm';
import SignInForm from './Authorization/SignInForm';
import Home from "./Main/Home"
import * as serviceWorker from './serviceWorker';
import './Styles/index.css';


const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        localStorage.getItem("sessionToken")? 
            <Component {...innerProps} />
            :
            <Redirect to="/" />
      }
    />
  );
};

const routing = (
  <BrowserRouter>
        <PrivateRoute exact path="/home" component = {Home}/>       
        <Route exact path = "/" component={SignUpForm}/>
        <Route exact path = "/sign-in" component={SignInForm}/>
  </BrowserRouter>
)
ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
