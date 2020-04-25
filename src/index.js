import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom'

import {createStore} from 'redux'

import SignUpForm from './Authorization/SignUpForm';
import SignInForm from './Authorization/SignInForm';

import Fb_Main from './Social/Fb_Main'
import Tw_Main from './Social/Tw_Main'
import Inst_Main from './Social/Inst_Main'
import Pin_Main from './Social/Pin_Main'
import UserSettings from './Main/UserSettings'

import InstagramRedirect from "./RedirectComp/InstagramRedirect"
import Home from "./Main/Home"
import * as serviceWorker from './serviceWorker';
import './Styles/index.css';

import {Provider} from 'react-redux'
import rootReducer from './Store/reducers'
const store  = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        localStorage.getItem("sessionToken")? 
            <Component {...innerProps} />
            :
            <Redirect to="/sign-in" />
      }
    />
  );
};

const redirect_routes =(
  <Route path="/instagaram-redirect/" component={InstagramRedirect}/>
)

const routing = (
  <React.Fragment>
    <BrowserRouter>   
      <Switch>
        <Provider store= {store}>
          <Route exact path="/" component = {Home}/> 
          <PrivateRoute path="/fb" component={Fb_Main} />
          <PrivateRoute path="/tw" component={Tw_Main} />
          <Route path="/inst" component={Inst_Main}/>
          <PrivateRoute path="/pin" component={Pin_Main}/>
          <Route path="/user-settings" component={UserSettings}/>
        </Provider>
      </Switch>

      <Route exact path = "/sign-up" component={SignUpForm}/>
      <Route exact path = "/sign-in" component={SignInForm}/>
      {redirect_routes}
    </BrowserRouter>
  </React.Fragment>
)

ReactDOM.render(
    routing,
  document.getElementById('root') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//dadce1 light blue
