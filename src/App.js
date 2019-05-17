import React,{Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import './App.css';

let products = [
  {name: '1956',
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r45BA7KAUn9JAMi8wp5FDx1CJqXP20ydUc_W13k7k29oZ2jOHA',
   id: 0},
  {name: '1966',
   image: 'https://www.carspiritpk.com/wp-content/uploads/2018/12/Annie-VW-Beetle-11-850x567-726x363.jpg',
   id: 1},
  {name: '1969',
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBI3t3-RhTBocQAh-_MpmPTVZNyZZIjpUi4XiJo-qcq4k-Ym1x',
   id: 2},
   {name: '1974',
   image: 'https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/218069/218069_Side_Profile_Web.jpg',
   id: 3}
]

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: products
    }
    console.log(products)
  }


  render(){
    const mappedProducts = this.state.products.map((element,i) => {
      return (
        <div>
          <products key={i}
                    products={element}/>
        </div>
      )
    })

    return(
      <div className="App">
       <Header/>
       <Form/>
       <Dashboard inventory={this.products} />
      </div>
    );
  }
}


export default App;
