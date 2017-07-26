import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import TitleHeader from '../../shared/TitleHeader/TitleHeader.js';

class Login extends Component {
  render(){
    return(
      <div className='login'>
        <TitleHeader title='login'/>
         <h6>login</h6>
         <h1>登录</h1>
         <h4>连接一个个小而确定的幸福</h4>
         <form onSubmit={this.signUp}>
           <div>
             <input type='text' placeholder='用户名' ref={value=> this.userNameInput=value}/>
           </div>
           <div>
             <input type='password' placeholder='password' ref={value=> this.passwordInput=value}/>
           </div>
           <div>
             <button>登陆</button>
           </div>
           <div>
             <Link to='/signup'>没有账号？点此注册</Link>
           </div>
         </form>
       </div>
    )
  }
}
export default Login;
