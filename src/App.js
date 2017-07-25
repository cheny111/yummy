import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './ui/pages/Home/Home.js';
import Signup from './ui/pages/Signup/Signup.js';
import Login from './ui/pages/Login/Login.js';
import Sidebar from './ui/shared/Sidebar/Sidebar.js';
import Dashboard from './ui/pages/Dashboard/Dashboard.js';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route render={({location})=>{
              return location.pathname !=='/'?
              (<Sidebar/>):null
            }}/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/dashboard' component={Dashboard}/>
            </Switch>
          </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
