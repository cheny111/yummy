import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux'
import Home from './ui/pages/Home/Home.js';
import Signup from './ui/pages/Signup/Signup.js';
import Login from './ui/pages/Login/Login.js';
import Sidebar from './ui/shared/Sidebar/Sidebar.js';
import Dashboard from './ui/pages/Dashboard/Dashboard.js';
import AlertBox from './ui/shared/AlertBox/AlertBox.js';
import Dish from './ui/pages/Dish/Dish.js';
import Cart from './ui/pages/Cart/Cart'
import Profile from './ui/pages/Profile/Profile'
import Dishes from './ui/pages/Dishes/Dishes.js'
import {Provider} from 'react-redux';
import store from './redux/store.js';
import Settings from './settings.js';
import CartButton from './ui/shared/CartButton/CartButton.js'
import User from './ui/pages/User/User.js'
class App extends Component {
  componentDidMount() {
    // AUTH_USER
    let userId = localStorage.getItem('userId')
    if(userId) {
      axios.get(`${Settings.host}/user/${userId}`).then(res => {
        this.props.dispatch({ type: 'AUTH_USER', username: res.data.user.username })
      })
    }

    // LOAD_USERS
    axios.get(`${Settings.host}/users`).then(res => {
        this.props.dispatch({ type: 'LOAD_USERS', users: res.data.users })
      }
    )

    // LOAD_DISHES
    axios.get(`${Settings.host}/dishes`).then(res => {
        this.props.dispatch({ type: 'LOAD_DISHES', dishes: res.data.dishes })
      }
    )

    // LOAD_COMMENTS
    axios.get(`${Settings.host}/comments`).then(
      res => {
        const { comments } = res.data
        this.props.dispatch({ type: 'LOAD_COMMENTS', comments })
      }
    )
  }
  render() {
    const { isAuthenticated } = this.props

    return (
      <div>
        <AlertBox />
        <Router>
          <div>
            <Route render={({ location }) => {
                return location.pathname !== '/' ?
                       <Sidebar /> : null
              }} />
            <Switch>
              <Route exact path="/" render={() => {
                  return isAuthenticated ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <Home />
                  )
                }}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              <Route path="/dishes" component={Dishes} />
              <Route path="/cart" component={Cart} />
              <Route path="/dish/:dishId" component={Dish} />
              <Route path="/user/:userId" component={User} />
            </Switch>
            <CartButton />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.account.isAuthenticated
})

export default connect(mapStateToProps)(App)
