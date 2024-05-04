import React from 'react'
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
export default function CheckOut2() {
  const [errorMessage, setErrorMessage] = useState(null);
  let id='65d3a588fd7fcd003463a4a6';
let {checkoutPayment} =useContext(CartContext)
  async function Payment(values) {
   let {data}=  await checkoutPayment(id,values);
console.log(data)
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
   <h1>ho\i</h1>
  );
}

