import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SigIn from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Result'
const Routing = () => {
  return (
    
<Router>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SigIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/catagory/:catagoryName" element={<Results />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
</Router>


  )
}

export default Routing;