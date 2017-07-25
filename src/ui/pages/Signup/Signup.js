import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Signup.css';

class Signup extends Component {
  signUp=(e)=>{
    e.preventDefault();
    let username=this.userNameInput.value;
    let password=this.passwordInput.value;
    let data={username,password}
    axios.post('http://192.168.0.122:3008/user/signup',data)
    .then(res=>console.log(res))

  }
  render() {
    return(
      <div className='signup'>
         <h6>sign up</h6>
         <h1>注册</h1>
         <h4>连接一个个小而确定的幸福</h4>
         <form onSubmit={this.signUp} ref={value=>{this.signupForm=value}}>
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
           <div className='submit'>
             <input type='submit'/>
           </div>
           <div>
             <Link to='/login'>已有账号？点此登陆</Link>
           </div>
         </form>
       </div>
    )
  }
}
export default Signup;
