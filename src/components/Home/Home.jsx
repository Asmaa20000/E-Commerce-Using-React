import React, { useContext } from 'react'
import { counterContext } from '../Context/counterContext'
import Products from '../Products/Products'
import Category from '../Category/Catefory'
import HomeSlider from '../Slider/Slider'

export default function Home() {
//  let {counter,changeCounter}= useContext(counterContext);

  return (
    <div>
     <HomeSlider/>
      <p>Category</p>
      <Category/>
      <p>Products</p>
      <Products/>
    </div>
  )
}

