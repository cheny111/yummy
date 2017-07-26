import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './signup.css';
import TitleHeader from '../../shared/TitleHeader/TitleHeader.js';
import Settings from '../../../settings.js';

class Signup extends Component {
  signup=(e)=>{
    e.preventDefault()
    let username=this.userNameInput.value
    let password=this.passwordInput.value
    let data={username,password}
    axios.post(`${Settings.host}/user/signup`,data)
    .then(res=>{
      console.log(res.data)
      if(res.data.username){
        sessionStorage.username=res.data.username
      }
    })
    this.signupForm.reset()
  }
  render() {
    return(
      <div className='signup'>
        <TitleHeader title='signup'/>
        <div className='signup-content'>
          <div className='signup-hero'>
            <h1 className='title'>注册</h1>
            <p className='slogan'>连接一个个小而确定的幸福</p>
          </div>
          <div className='signup-form-wrap'>
            <form  onSubmit={this.signup} ref={value=>this.signupForm=value} className='signup-form' >
              <div>
                <input type='text' placeholder='用户名' ref={value=> this.userNameInput=value}/>
              </div>
              <div>
                <input type='email' placeholder='Email'/>
              </div>
              <div>
                <input type='password' placeholder='password' ref={value=> this.passwordInput=value}/>
              </div>
              <div>
                <input type='password' placeholder='确认密码'/>
              </div>
              <div  className='signup-actions'>
                <button type='submit'>注册</button>
              </div>
            </form>

          </div>
          <div className='signup-other-option'>
            <Link to='/login'>已有账号？直接登录</Link>
          </div>
        </div>
       </div>
    )
  }
}
export default Signup;
