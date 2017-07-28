import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {
  state={
    isOpen:false
  }
  closeBmMenu=()=>{
    this.setState({
      isOpen:false
    })
  }
  logout=()=>{
    localStorage.removeItem('userId')
    this.props.dispatch({type:'LOG_OUT'})
  }
  render() {
    let authStr=(
      <div>
        <Link to='/login' onClick={this.closeBmMenu}>登录</Link>|
        <Link to='/signup' onClick={this.closeBmMenu}>注册</Link>
      </div>
    )
    let userInfo=(
      <div>
        <Link to="" className="bm-user-left">{this.props.currentUser}</Link>
        <Link to="" className="bm-user-right" onClick={this.logout}>退出</Link>
      </div>
    )
    return(
      <div className='sidebar'>
        <Menu isOpen={this.state.isOpen}>
          <div className='bm-user-info'>
            <img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='avatar'/>
            <div className='bm-user-auth'>
              {this.props.isAuthenticated? userInfo:authStr}
            </div>
          </div>
          <div className="bm-link-list">
            <Link to='/user' onClick={this.closeBmMenu}>个人中心</Link>
            <Link to='/user' onClick={this.closeBmMenu}>首页</Link>
            <Link to='/cart' onClick={this.closeBmMenu}>购物车</Link>
            <Link to='/dishes' onClick={this.closeBmMenu}>猜你喜欢</Link>
          </div>
          <button className='bm-colse-button' onClick={this.closeBmMenu}>
            关闭
          </button>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.account.currentUser,
  isAuthenticated: state.account.isAuthenticated
})
export default connect(mapStateToProps)(Sidebar);
