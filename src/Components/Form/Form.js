import React,{Component} from 'react'
import axios from 'axios'

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      img:'',
      name:'',
      price: 0
    }
  }

  handleImg(img) {
    this.setState({img:img})
    console.log(this.state.img)
  }

  render(){
    return(
    <div>
      <div>Form
        <input type="text" onChange={e => this.handleImg(e.target.value)}/>
        <input type="text"/>
        <input type="text"/>
        <button>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    </div>
    )
  }
}

export default Form