import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import TitleHeader from '../../shared/TitleHeader/TitleHeader.js';
import Settings from '../../../settings.js';
import './login.css';

class Login extends Component {
  login=(e)=>{
    e.preventDefault()
    let username=this.usernameInput.value
    let password=this.passwordInput.value
    let data={username,password}
    axios.post(`${Settings.host}/user/login`,data)
    .then(res=>{
      console.log(res.data)
      this.props.dispatch({type:'SIGN_IN',username:res.data.username})
      this.props.history.push('/dashboard')
    })
    .catch(err=>{
      console.log(err.response.data.msg)
      let {msg}=err.response.data
      this.props.dispatch({type:'SHOW_ALERT',msg:{msg}})
    })
  }
  render(){
    return(
      <div className='login'>
        <TitleHeader title='login'/>
        <div className='login-content'>
          <div className='login-hero'>
            <h1 className='title'>登录</h1>
            <p className='slogan'>连接一个个小而确定的幸福</p>
          </div>
          <div className='login-form-wrap'>
            <form  onSubmit={this.login}  className='login-form' >
              <div>
                <input type='text' placeholder='用户名' ref={value=> this.usernameInput=value}/>
              </div>
              <div>
                <input type='password' placeholder='password' ref={value=> this.passwordInput=value}/>
              </div>
              <div  className='login-actions'>
                <button type='submit'>登录</button>
              </div>
            </form>
          </div>
          <div className='login-other-option'>
            <Link to='/signup'>没有账号？点此注册</Link>
          </div>
        </div>
       </div>
    )
  }
}
export default connect(null)(Login);
