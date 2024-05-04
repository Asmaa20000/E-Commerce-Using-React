import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { BallTriangle } from 'react-loader-spinner'
//branding using react Query////////////
export default function Brands() {
 async function GetBrands(){
   return await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }
  let {data,isLoading,isFetchng}=useQuery('brands',GetBrands)
  return (
    <div className='row'>
      {!isLoading?
      <>
       {
        data?.data.data.map((brand)=>{
        return <div className="col-md-3" key={brand._id}>
          <img className='w-100' src={brand.image} alt={brand.name}/>
          <p className='text-center text-main'>{brand.name}</p>
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

