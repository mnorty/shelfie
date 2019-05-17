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

  handleName(name) {
    this.setState({name:name})
    console.log(this.state.name)
  }

  handlePrice(price) {
    this.setState({price:price})
    console.log(this.state.price)
  }

  clearInputs(){
    this.setState({
      img:'',
      name:'',
      price: 0
    })
  }

  render(){
    return(
    <div>
      <div>Form
        <input type="text" value={this.state.img} onChange={e => this.handleImg(e.target.value)}/>
        <input type="text" value={this.state.name} onChange={e => this.handleName(e.target.value)}/>
        <input type="text" value={this.state.price} onChange={e => this.handlePrice(e.target.value)}/>
        <div className="ButtonBox">
          <button onClick={_ => this.clearInputs()}>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    </div>
    )
  }
}

export default Form