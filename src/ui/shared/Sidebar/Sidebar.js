import React,{Component} from 'react';
import {Link} from 'react-router-dom'
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
  render() {
    return(
      <div className='sidebar'>
        <Menu isOpen={this.state.isOpen}>
          <div className='bm-user-info'>
            <img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='avatar'/>
            <div className='bm-user-auth'>
              <Link to='' className='bm-user-left'>happyPeter</Link>
              <Link to='' className='bm-user-right'>退出</Link>
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
export default Sidebar;
