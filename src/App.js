import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './ui/pages/Home/Home.js';
import Signup from './ui/pages/Signup/Signup.js';
import Login from './ui/pages/Login/Login.js';
import Sidebar from './ui/shared/Sidebar/Sidebar.js';
import Dashboard from './ui/pages/Dashboard/Dashboard.js';
import AlertBox from './ui/shared/AlertBox/AlertBox.js';
import Dish from './ui/pages/Dish/Dish.js';
import {Provider} from 'react-redux';
import store from './redux/store.js';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <AlertBox/>
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
              <Route path='/dish/:id' component={Dish}/>
            </Switch>
          </div>

        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
