// import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
export default function CheckOut() {
  const [errorMessage, setErrorMessage] = useState(null);
  // let id='6428ebc6dc1175abc65ca0b9';
  let id = '65d3a588fd7fcd003463a4a6';
let {checkoutPayment} =useContext(CartContext)
  async function Payment(val) {
   let {data}=  await checkoutPayment(id,val);
console.log(data)
if (data.status == 'success')
{
  console.log('hi')
  window.location = data.data.session.url
}
  }
  const formik = useFormik({
    initialValues: {
      details: '',
      city: '',
      phone: ''
    },
    onSubmit:Payment,

  });

  return (
    <>
    
      <h1 className="text-main text-center my-3">Payment</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row w-50 m-auto bg-light shadow p-4 gy-4">
        <div className="col-md-12">
            <label htmlFor="details">Details</label>
            <input
              type="text"
              id="details"
              name="details"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.details}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
          <div className="col-md-12 text-end my-3">
            <button type="submit" className="btn bg-main text-light">Pay
            </button>
          </div>
          </div>
      </form>
    </>
  );
}


   // let { data } =await axios.post
      //  (`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`, values)
      // .catch((err)=>{
      //   setErrorMessage(err.response.data.message);
      //   setLoading(false);
      // })
      // if (data.message === 'success') {
      // setLoading(false);