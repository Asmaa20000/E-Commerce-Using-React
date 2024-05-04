import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { userContext } from "../Context/TokenContext";

export default function SignIn() {

let {usertoken,settoken}= useContext(userContext) ;

  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Enter a valid email'),
    password: Yup.string().required('Password is required').matches(/^[A-z][a-z0-9]{6,8}$/, 'Enter a valid password'),
  });

  async function signIn(values) {
    setLoading(true);
    try {
      const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values);
      if (data.message === 'success') {
        navigate('/home');
        localStorage.setItem('userToken',data.token);
        settoken(data.token)
        console.log(usertoken);
      } else {
        setErrorMessage('Sign-in failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: signIn,
    validationSchema: validationSchema
  });

  return (
    <>
      <h1 className="text-main text-center my-3">Log in</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row w-50 m-auto bg-light shadow p-4 gy-4">
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
          <div className="col-md-12 text-end my-3">
            <button type="submit" className="btn bg-main text-light">
              {isLoading ? (
                <span className="fa-solid fa-spin fa-spinner mx-2 text-light"></span>
              ) : (
                'Login'
              )}
            </button>
          </div>
          {errorMessage && (
            <div className="col-md-12 text-danger">
              {errorMessage}
            </div>
          )}
          <p className="text-muted">Don't have an account? <Link to="signup" className="ms-2 text-main fw-bold">Register</Link></p>
        </div>
      </form>
    </>
  );
}
