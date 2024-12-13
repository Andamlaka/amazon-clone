import React from 'react'
import Layout from './../../components/Layout/Layout';
import Carousel from './../../components/Carousel/Carousel';
import CatagoryData from '../../components/Catagory/catagory';
import Product from '../../components/Product/product';
const Landing = () => {
  return (
    <Layout>
     <Carousel/>
      <CatagoryData />
      <Product/>

    </Layout>
  )
}

export default Landing