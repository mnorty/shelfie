import React,{Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product';

class Dashboard extends Component {
  render(){
    // console.log(this.state.props)
    return(
      <div>
      {this.props.inventory.map((el)=> {
        return <Product key={el.id} item={el} />
      })}
      </div>
    )
  }
}

export default Dashboard