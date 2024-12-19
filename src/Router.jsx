import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import  Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Result'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51QXKKFJltEXSN2SElFMksJ3e8rVOzXrjPuowGUz0i9sQjvNJJMKawEyUt7jH0F2Ev5H2YofujuXIfpYbHLYCPGfk00S9jtiRlW'
)
const Routing = () => {

  
  return (
    
<Router>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={
          <Elements stripe={stripePromise}>
            
            <Payment />
            </Elements>
            } />
        <Route path="/orders" element={<Orders />} />
        <Route path="/catagory/:catagoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
</Router>


  )
}

export default Routing;