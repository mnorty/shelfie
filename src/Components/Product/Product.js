import React,{Component} from 'react'
import axios from 'axios'

export default function Product(props){
  let {name,img,price} = props.item

  return(
    <div className='Product'>
    <img src={img} alt='Picture'></img>
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <button>delete</button>
    </div>
  </div>
  )
}
