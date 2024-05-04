import React from 'react'
import Slider from 'react-slick'
import img1 from '../../Assets/imgs/FreshFruit.jpg'
import img2 from '../../Assets/imgs/baking.jpg'
import img3 from '../../Assets/imgs/FreshFruit.jpg'
import img4 from '../../Assets/imgs/Grocery.jpg'
import img5 from '../../Assets/imgs/Hot chocolate.jpg'
import img6 from '../../Assets/imgs/Grocery2.jpg'
import img7 from '../../Assets/imgs/baking2.jpg'

export default function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='row g-0'>
      <div className="col-md-8">
      <Slider {...settings}>
      {/* <img alt='img' src={img} className='w-100' height={500}/> */}
 <img alt='img' src={img7} className='w-100' height={500}/>
<img alt='img' src={img4} className='w-100' height={500}/>
<img alt='img' src={img6} className='w-100' height={500}/>
<img alt='img' src={img5} className='w-100' height={500}/>


      </Slider>
      </div>
      <div className="col-md-4">
      <img alt='img' src={img1} className='w-100' height={250}/>
<img alt='img' src={img2} className='w-100' height={250}/>
      </div>
    </div>
  )
}

