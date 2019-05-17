import React,{Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import './App.css';

let products = [
  {name: 'Hammer',
   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r45BA7KAUn9JAMi8wp5FDx1CJqXP20ydUc_W13k7k29oZ2jOHA',
   price: 5},
  {name: 'Shovel',
   img: 'https://www.carspiritpk.com/wp-content/uploads/2018/12/Annie-VW-Beetle-11-850x567-726x363.jpg',
   price: 10},
  {name: 'Rake',
   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBI3t3-RhTBocQAh-_MpmPTVZNyZZIjpUi4XiJo-qcq4k-Ym1x',
   price: 15},
   {name: 'Gloves',
   img: 'https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/218069/218069_Side_Profile_Web.jpg',
   price: 20}
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: products
    }
    console.log(products)
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
