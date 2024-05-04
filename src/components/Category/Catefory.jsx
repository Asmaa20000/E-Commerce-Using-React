import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function Category() {
  const[categoryList,setCategory]= useState([])
  async function GetCategory(){
  let{data} =await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  setCategory(data.data);
  }
  useEffect(()=>{
GetCategory();
  },[])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (

    <div>
      <Slider {...settings}>
        {categoryList.map((category)=>{
          return <> <img  alt={category.name} src={category.image} height={300} className='w-100'/>
          <p className='text-main'>{category.name}</p>
          </> 
        })}
      </Slider>
      
    </div>
  )
}

