import React, { Component } from 'react'
import { connect } from 'react-redux'

import './dish.css'
import TitleHeader from '../../shared/TitleHeader/TitleHeader.js';
import ShoppingIcon from '../../icons/ShoppingIcon.js';
import CommentIcon from '../../icons/CommentIcon.js';
import MyPieChart from './MyPieChart.js';
import MyAreaChart from './MyAreaChart.js'
import Comment from './Comment.js'

class Dish extends Component {
  buy = (dish, isInCart) => {
    if(isInCart) return
    this.props.dispatch({ type: 'ADD_CART', dishId: this.props.match.params.dishId, dish: dish })
  }

  render(){
    if(Object.keys(this.props.dishes).length !== 0){
      let { dishId } = this.props.match.params
      let dish = this.props.dishes[dishId]
      let isInCart =  Object.keys(this.props.cartDishes).includes(dishId)
      let { comments } = this.props
      console.log('comments', comments)
      return (
        <div className="dish">
          <TitleHeader title="草莓派" />
          <div className="dish-info">
            <div className="dish-img-wrap">
              <div style={{ 'backgroundImage' : `url(${dish.poster})`}}
                className="img">
              </div>
            </div>
            <div className="dish-info-card">
              <h1 className="dish-name">
                {dish.name}
              </h1>
              <div className="price-tag">
                {dish.price}<span className="unit">元</span>
              </div>
              <div onClick={() => this.buy(dish, isInCart)}
                className="shopping-icon-wrap">
                <ShoppingIcon color={isInCart ? '#F77062' : '#D0D0D0'}/>
              </div>
              <p className="dish-desc">
                {dish.desc}
              </p>
              <h1 className="dish-sub-title">营养成分</h1>
              <p className="dish-sub-detail">点击各部分查看详情</p>
              {/* <PieChart /> */}
              <h1 className="dish-sub-title">销售额</h1>
              <p className="dish-sub-detail">单位：份</p>
              {/* <AreaChart /> */}
              <h1 className="dish-sub-title">评论区</h1>
              <p className="dish-sub-detail">
                评论数：
                { Object.keys(comments).filter(id => comments[id].dish._id === dishId).length }
              </p>
              <Comment dishId={dishId}/>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all,
  comments: state.comment.all,
  cartDishes: state.cart.dishes,
})

export default connect(mapStateToProps)(Dish)
