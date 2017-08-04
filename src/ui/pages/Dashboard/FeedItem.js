import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentIcon from '../../icons/CommentIcon';

class FeedItem extends Component {
  styles={
    dishImg:{
      'background' : `url(${this.props.imgUrl}) no-repeat center center`,
       'height': '130px',
       'width': '90%',
       'margin': '0 auto',
       'marginTop': '20px'
    }
  }
  state = {
    expand: false
  }

  toggleExpand = () => {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    return(
      <div className={`feed-item ${this.state.expand  ? 'expand' : ''}`}>
        <div className="feed-expand">
          {this.props.comment}
        </div>
        <div className="feed-card">
          <div className="feed-card-header">
            <div className="feed-user">
              <img src="http://media.haoduoshipin.com/yummy/default-avatar.png"  alt="avtar" />
                <div className="feed-user-info">
                  <div className="feed-username">
                    {this.props.username}
                  </div>
                  <div className="feed-time">
                    2017年
                  </div>
                </div>
            </div>
            <div className="feed-button"
                onClick={this.toggleExpand}>
                <CommentIcon color={ this.state.expand ? '#FE5196' : '#D0D0D0'}/>
            </div>
          </div>
          <Link  to={`/dish/597be20c2bbfdbaa14bfa248`} className='feed-dish'>
            <img src={this.props.imgUrl} style={{width:'300px',height:'160px'}}/>
          </Link>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state) =>({
  dishes:state.dish.all
})
export default connect (mapStateToProps)(FeedItem);
