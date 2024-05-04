import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../Context/TokenContext'
export default function MasterLayout() {
 let {settoken}= useContext(userContext);
 useEffect(()=>{
  if(localStorage.getItem('userToken')!==null){
    settoken(localStorage.getItem('userToken'));
  }
 },[])
  return (
    <div>
   <Navbar/>
   <div className="container">
   <Outlet/>
   </div>
  
    </div>
  )
}
