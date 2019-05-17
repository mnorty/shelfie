import React,{Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product';

class Dashboard extends Component {
  // constructor(){

  // }
  render(){
    return(
    <div id='dB'>Dashboard
      <Product/>
    </div>
    )
  }
}

export default Dashboard