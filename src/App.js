
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MasterLayout from './components/MasterLayout/MasterLayout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Products2 from './components/Products2/Products';
import Brands from './components/Brands/Brands'
import Category from './components/Category/Catefory'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Carts/Cart'
import CounterContextProvider from './components/Context/counterContext';
import UserContextProvider from './components/Context/TokenContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Details from './components/Details/Details'
import CartContextProvider from './components/Context/CartContext';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import CheckOut from './components/CheckOut/CheckOut';
import CheckOut2 from './components/CheckOut2/CheckOut2';
import Recipe from './components/Recipy/Recipe';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';

const router= createBrowserRouter([
  {path:'', element:<MasterLayout/>,
children:[
 
  {path:'home', element:<ProtectedRoute><Home/></ProtectedRoute>},
  {path:'', element:<ProtectedRoute><Home/></ProtectedRoute>},
  {path:'products2', element:<Products2/>},
  {path:'forgetPassword', element:<ForgetPassword/>},
  {path:'recipe', element:<ProtectedRoute><Recipe/></ProtectedRoute>},
  {path:'products', element:<ProtectedRoute><Products/></ProtectedRoute>},
  {path:'brands', element:<ProtectedRoute><Brands/></ProtectedRoute>},
  {path:'category', element:<ProtectedRoute><Category/></ProtectedRoute>},
  {path:'checkout', element:<ProtectedRoute><CheckOut/></ProtectedRoute>},
  {path:'checkout2', element:<ProtectedRoute><CheckOut2/></ProtectedRoute>},
  {path:"/details/:id", element:<ProtectedRoute><Details/></ProtectedRoute>},
   {path:'signin', element:<SignIn/>},
   {path:'signup', element:<SignUp/>},
   
  {path:'*', element:<NotFound/>},
  {path:'cart', element:<ProtectedRoute><Cart/></ProtectedRoute>},
]}
])
function App() {

  return (
    <>
    {/* <CounterContextProvider> */}
    <CartContextProvider>
      <UserContextProvider>
<RouterProvider router={router}>
<ToastContainer theme='colored'/>
</RouterProvider>
</UserContextProvider>
</CartContextProvider>
{/* </CounterContextProvider> */}
  </>
  );
}


export default App;
