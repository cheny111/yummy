import React,{Component} from 'react'
import { AreaChart,XAxis,YAxis,Tooltip ,Area} from 'recharts';


class MyAreaChart extends Component {
  state={
    data:[
      {name: '3月', amount: '70'},
      {name: '4月', amount: '100'},
      {name: '5月', amount: '300'},
      {name: '6月', amount: '200'},
      {name: '7月', amount: '278'},
    ]
  }
  render() {
    let {data}=this.state
    return(
      <div>
        <AreaChart width={350} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis axisLine={false}
                tickLine={false}/>
          <Tooltip axisLine={false}
                tickLine={false}/>
          <Area type="monotone" dataKey="amount" stroke="#8884d8"  fill="rgba(0,0,1,0.2)" />
        </AreaChart>
      </div>
    )
  }
}
export default MyAreaChart;
