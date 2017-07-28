import React,{Component} from 'react';
import svg from './comment.svg';
import './dashboard.css';

export default class FeedItem extends Component {

  // imgUrl1 = 'http://media.haoduoshipin.com/yummy/dishes/dish3.jpg'
  // imgUrl2 = 'http://media.haoduoshipin.com/yummy/dishes/dish1.jpg'
  styles={
    dishImg:{
      'background' : `url(${this.props.imgUrl}) no-repeat center center`,
       'height': '130px',
       'width': '90%',
       'margin': '0 auto',
       'marginTop': '20px'
    }
  }
  render() {
    return(
      <div>
        <div className="feed-item">
          <div className="feed-item-header">
            <div className="feed-user">
              <img src="http://media.haoduoshipin.com/yummy/default-avatar.png"  alt="avtar" />
              <div className="feed-user-name-wrap">
                <div className="feed-user-name">
                  {this.props.username}
                </div>
                <div className="feed-user-time">
                  2017年7月
                </div>
              </div>
            </div>
            <div className="feed-comment-btn">
              <img src={svg} alt="comment" />
            </div>
          </div>
          <div style={this.styles.dishImg}
              className="feed-item-dish">
          </div>
        </div>

      </div>
    )
  }
}
