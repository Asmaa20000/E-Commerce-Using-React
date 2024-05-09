import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../Context/TokenContext'
import { CartContext } from '../Context/CartContext';
// import { counterContext } from '../Context/counterContext'

export default function Navbar() {
  // let {counter}= useContext(counterContext)
  let {getCart, CartNumber,setCartNumber}= useContext(CartContext)
  let {usertoken,settoken}= useContext(userContext);
  console.log(usertoken);
  let navigate= useNavigate();
  function logout(){
    localStorage.removeItem('userToken')
    settoken(null);
    navigate('/signin');
    
  }
  useEffect (()=>{
    (async()=>{
      let {data} = await getCart();
      setCartNumber(data.data.numOfCartItems)
    })()
  },[])

  return (
    <>
     <nav
      className ="navbar navbar-expand-sm navbar-light bg-light"
     >
      <div className ="container">
        <a className ="navbar-brand" href="#">
          <i className='fa-solid text-main fa-cart-shopping'></i><span className='fw-bold ms-2'>FreshCart</span></a>
        <button
          className ="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse" id="collapsibleNavId">
          {usertoken!==null?
           <ul className ="navbar-nav me-auto mt-2 mt-lg-0">
           <li className ="nav-item">
             <Link className ="nav-link active"to='home' aria-current="page"
               >Home</Link>
           </li>
           <li className ="nav-item">
             <Link className ="nav-link active"to='products' aria-current="page"
               >Products</Link>
           </li>
           <li className ="nav-item">
             <Link className ="nav-link active"to='category' aria-current="page"
               >Categories</Link>
           </li>
           <li className ="nav-item">
             <Link className ="nav-link active"to='brands' aria-current="page"
               >Brands</Link>
           </li>

           <li className ="nav-item">
             <Link className ="nav-link active"to='recipe' aria-current="page"
               >Recipies</Link>
           </li>
         </ul>
          :''}
         
          <ul className ="navbar-nav ms-auto mt-2 mt-lg-0">
       {usertoken==null?
       <>
       <li className ="nav-item">
       <Link className ="nav-link active"to='signin' aria-current="page"
           >Login</Link>
       </li>
       <li className ="nav-item">
         <Link className ="nav-link active"to='signup' aria-current="page"
           >Register</Link>
       </li>
       </>
       :''}
            
            {usertoken !== null ? (
  <li className="nav-item d-none d-lg-flex align-items-center"> 
    <div className="d-flex align-items-center">
      <i className='fa-brands fa-facebook mx-3'></i>
      <i className='fa-brands fa-twitter mx-3'></i>
      <i className='fa-brands fa-instagram mx-3'></i>
      <i className='fa-brands fa-linkedin mx-3'></i>
      <li className ="nav-item">
             <Link className ="nav-link active" to='cart' aria-current="page"
               ><i className='fa-solid fa-shopping-cart text-main'></i>
               <span className='badge bg-main text-light ms-1'>{CartNumber}</span></Link>
           </li>
      <button onClick={logout} className="nav-link btn btn-link ms-3" aria-current="page">Log out</button>
    </div>
  </li>
) : null}
           

           
          </ul>
        
        </div>
      </div>
     </nav>
      
    </>
  )
}
