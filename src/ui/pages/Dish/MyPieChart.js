import React,{Component} from 'react';
import { PieChart,Pie,Cell} from 'recharts';

class MyPieChart extends Component {
  state={
    data:[
      {name:'a',value:'2'},
      {name:'b',value:'2'},
      {name:'c',value:'3'},
      {name:'d',value:'4'}
    ],
    colors:['pink','orange','purple','lightgreen']
  }
  render() {
    let {data,colors}=this.state
    return(
      <div>
        <PieChart width={530} height={250}>
          <Pie dataKey='value' data={data} cx="50%" cy="50%" innerRadius={45} outerRadius={80}   label >
          {
           data.map((item, index) => (
             <Cell key={`cell-${index}`} fill={colors[index]} />
            ))
           }
         </Pie>
        </PieChart>
      </div>
    )
  }
}
export default MyPieChart;
