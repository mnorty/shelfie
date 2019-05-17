import React,{Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
    this.getInventory = this.getInventory.bind(this)
    console.log(this.state.products)
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory(){
    axios.get('http://localhost:5656/api/products')

    .then(res => {
      this.setState({
        products: res.data
        })
      })
    
  }


  render(){
    return(
      <div className="App">
       <Header/>
       <Form getInventory={this.getInventory}/>
       <Dashboard inventory={this.state.products} />
      </div>
    );
  }
}


export default App;
