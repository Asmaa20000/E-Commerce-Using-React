import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import signin from "../SignIn/SignIn"

export default function SignUp() {
  const[isloading, setLoading]=useState(false);
  const[errormessage,seterrormessage]= useState(null);
  let navigate= useNavigate();
 let validationSchema= Yup.object({
    name:Yup.string().min(3,'minimum length 3 characters').max(15,'maximum length 15 characters')
    .required('name is required'),
    email:Yup.string().required('email is required').email('enter a valid email'),
    phone:Yup.string().required('phone required').matches(/^01[0125][0-9]{8}$/, 'Enter valid phone'),
    password:Yup.string().required('password required').matches(/^[A-z][a-z0-9]{6,8}$/, 'Enter valid password'),
    rePassword:Yup.string().required(' confirm password required').oneOf([Yup.ref('password')], 'not matched')


  })
  async function SignUp(values){
    setLoading(true)
let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
.catch((err)=>{
  // console.log(err.response.data.message);
  seterrormessage(err.response.data.message);
  setLoading(false)
})
if(data.message=='success'){
  navigate('/signin');
  setLoading(false)
}
  }
 let formik=  useFormik({
initialValues:{
  name:'',
  email:'',
  password:'',
  rePassword:'',
  phone:''
},
onSubmit:SignUp,
validationSchema:validationSchema
  })
  return (
    <>
      <h1 className="text-main text-center my-3">Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row w-75 m-auto bg-light shadow p-4 gy-4">
          <div className="col-md-12">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              name="name"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="col-md-12">
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              id="userEmail"
              name="email"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="col-md-12">
            <label htmlFor="userPhone">Phone</label>
            <input
              type="tel"
              id="userPhone"
              name="phone"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-danger">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="col-md-12">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              name="password"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="col-md-12">
            <label htmlFor="userConfirm">Confirm Password</label>
            <input
              type="password"
              id="userConfirm"
              name="rePassword"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
            />
            {formik.touched.rePassword && formik.errors.rePassword ? (
              <div className="text-danger">{formik.errors.rePassword}</div>
            ) : null}
          </div>
          {errormessage!==null?<p className="text-danger fw-bold ">{errormessage}</p>:''
          }
          <div className="col-md-12 text-end my-3">
            <button type="submit" className="btn bg-main text-light">
              Register
              {isloading?<span className="fa-solid fa-spin fa-spinner mx-2 text-light"></span>

              :''}
            </button>

          </div>
          <p className="text-muted">I already have account<Link to="signin" className=" ms-2 text-main fw-bold">Log in</Link></p>
        </div>
      </form>
    </>
  );
}
