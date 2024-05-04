import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProtectedRoute(myprops) {
 let navigate= useNavigate();
  if(localStorage.getItem('userToken')!==null){
return myprops.children;
  }
  else{
 return <Navigate to="/signin"/>
  }
  return (
   <></>
  )
}
