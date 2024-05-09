import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCounter, changename } from '../../Redux/CounterSlice';


export default function Products() {
    let {name,age,counter}= useSelector((state)=>state.counterData);
    let dispatch= useDispatch();
// console.log(data);
    return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{counter}</p>
      <button  className='btn btn-success' onClick={()=>{dispatch(changename())}}>click me</button>
      <button  className='btn btn-success' onClick={()=>{dispatch(changeCounter(Math.random()))}}>Click two</button>

    </div>
  )
}
