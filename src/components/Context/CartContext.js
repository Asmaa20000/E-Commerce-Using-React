import axios from "axios";
import { createContext, useState } from "react";

 export let CartContext= createContext();
export default function CartContextProvider(props){
    const[CartNumber,setCartNumber]=useState(0)
    let BaseUrl=`https://ecommerce.routemisr.com`;
    let header={
        token:localStorage.getItem('userToken')
    }

function AddToCart(id){

    return axios.post(
        `${BaseUrl}/api/v1/cart`,
        // body
        { productId: id },
        // headers
        { headers: header }
    )
}


function UpdateCart(id, count){

  return axios.put(
      `${BaseUrl}/api/v1/cart/${id}`,
    {
      count:count
    }  ,
      { headers: header }
  )
}

function DeleteCart(id){

  return axios.delete(
      `${BaseUrl}/api/v1/cart/${id}`,
    
      { headers: header }
  )
}


  function getCart() {
    return axios.get(`${BaseUrl}/api/v1/cart`, {
      headers: header,
    });
  }
  function checkoutPayment(id, formData){
    return axios.post(
      `${BaseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,
    {
      shippingAddress:formData
    }
     , { 
        headers: header 
      }
  )
  }
return <CartContext.Provider
 value={{AddToCart,CartNumber,setCartNumber,getCart,DeleteCart,UpdateCart,checkoutPayment}}>
    {props.children}
</CartContext.Provider>



}