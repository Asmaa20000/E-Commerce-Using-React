import axios from "axios";
import { useFormik } from "formik";
import * as yup from 'yup'
let validationSchema= yup.object({
  email:yup.string().required('you must enter Email').email('Enter a Valid Email')
})
export default function ForgetPassword() {
  async function SendCode(values) {
    try {
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgetpasswords`, values);
      // Handle the response data here
      console.log(data); // Example: Log the response data to the console
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
  }

  let formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: validationSchema,
    onSubmit: SendCode
  });

  return (
    <>
      <h3>Forget Password</h3>
      <form onSubmit={formik.handleSubmit} className='w-75 mx-auto my-5'>
        <label>Email:</label>
        <input
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          type='email'
          id='email'
          name='email'
          className='form-control'
        />
        <div>
          {formik.touched.email && formik.errors.email ? <p className='text-danger my-3'>{formik.errors.email}</p> : ''}
        </div>
        <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-light my-3'>Send</button>
      </form>
    </>
  );
}
