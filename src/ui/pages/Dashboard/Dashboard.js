import React,{Component} from 'react';

import TitleHeader from '../../shared/TitleHeader/TitleHeader.js';

import FeedItem from './FeedItem.js';

class  Dashboard extends Component {
   imgUrl1 = 'http://media.haoduoshipin.com/yummy/dishes/dish1.jpg'
   imgUrl2 = 'http://media.haoduoshipin.com/yummy/dishes/dish2.jpg'
   imgUrl3 = 'http://media.haoduoshipin.com/yummy/dishes/dish3.jpg'
  cards=[
    {username:'Billie Zhang',comment:"真是好吃",imgUrl:this.imgUrl1},
    {username:'zhang nan',comment:'不错',imgUrl:this.imgUrl2},
    {username:'gougo',comment:'还好吧',imgUrl:this.imgUrl3}
  ]
  render() {
    const cardList=this.cards.map((item,id)=>{
      return(
        <FeedItem key={id} username={item.username} comment={item.comment} imgUrl={item.imgUrl}/>
      )
    })
    return(
      <div className="dashboard">
       <TitleHeader title="好友更新"/>
       <div className="feed-wrap">
         {cardList}
       </div>
     </div>
    )
  }
}

export default Dashboard;
