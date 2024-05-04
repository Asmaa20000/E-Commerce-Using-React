import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';
export default function Details() {
  let {AddToCart,setCartNumber}= useContext(CartContext);
 
  const[productDetails, setDetails]= useState(null);
  let params=useParams();
  let productId=params.id
  async function getProduct(){
 let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`);
 console.log(data.data);
 setDetails(data.data);
  }

  async function AddToMyCart(id) {
    try {
      const { data } = await AddToCart(id);
      console.log(data); 
      if (data.status === 'success') {
        toast.success(data.message);
        setCartNumber(data.numOfCartItems)
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error('An error occurred while adding product to cart.');
    }
  }
  useEffect(()=>{
getProduct();
  },[productId])
  return (
  
    <div className='container my-5'>
      <div className="row">
        <div className="col-md-3">
          <img className='w-100'  src={productDetails?.imageCover} alt='cover'/>
        </div>
        <div className="col-md-9 d-flex flex-column justify-content-around">
          <div>
          <h2>{productDetails?.title}</h2>
          <p> {productDetails?.description}</p>
          </div>
         
          <p>{productDetails?.category?.name}</p>
        <div className='d-flex justify-content-between'>
          <p><span className='text-main'> Price: </span>{productDetails?.price}</p>
          <p>{productDetails?.ratingsAverage}<i className='fa-solid fa-star ratingColor ms-1'></i></p>
          </div>
          </div>
          <button onClick={()=>{AddToMyCart(productDetails._id)}} className='col-12 btn bg-main text-light'>Add To Cart</button>
    
      </div>
    </div>
  )
}
// import React from 'react'
// import { useParams } from 'react-router-dom'

// export default function Details() {
//  let x= useParams();
//  console.log(x);
//  console.log(x.id)
//   return (
//     <div>
      
//     </div>
//   )
// }

