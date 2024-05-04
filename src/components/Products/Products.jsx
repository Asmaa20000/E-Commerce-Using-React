import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';


export default function Products() {
 let {AddToCart,setCartNumber}= useContext(CartContext)
  const[productlist, setProduct]=useState([]);
   async function getproducts(){
 let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products');
//  console.log(data.data);
 setProduct(data.data);
  }
  async function AddToMyCart(id) {
    try {
      const { data } = await AddToCart(id);
      console.log(data); 
      if (data.status === 'success') {
        toast.success(data.message);
        setCartNumber(data.numOfCartItems);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error('An error occurred while adding product to cart.');
    }
  }
  
  
  useEffect(()=>{
getproducts();
  },[]);

  return (
    <div className='row'>

      {productlist.length>0 ?
      <>
  {productlist.map((Product)=>{
    return <div className="col-md-3" key={Product._id}>
      <div className='Product px-4 m-2'>
        <Link to={`/details/${Product._id}`}>
        <img alt={Product.title} src={Product.imageCover} className='w-100'/>
    <p className='text-main'>{Product.category.name}</p>
    <h6>{Product.title}</h6>
    <div className='d-flex justify-content-between'>
    <p>{Product.price} EGp</p>
    <p>{Product.ratingAverage}<i className='fa-solid fa-star ratingColor'></i></p>
    </div>
        </Link>
    
    <button onClick={()=>{AddToMyCart(Product._id)}} className=' col-12 btn bg-main text-light'>Add To Cart</button>
      </div>
    </div>
          })}
          </>
          
      :
      <div className='d-flex justify-content-center align-items-center vh-100 '>
       <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        </div>
        }
    
    </div>
  )
}

