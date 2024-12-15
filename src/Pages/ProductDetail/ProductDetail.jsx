import React, {useState, useEffect } from 'react'
import classes from './ProductDetail.module.css'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from './../../components/Product/productCard';
import Loader from '../../components/Loader/Loader'

const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [isloading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${productUrl}/products/${productId}`)
        .then((res) => {
            setProduct(res.data)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }, [])
  return (
    <Layout>
        {isloading? (<Loader />) :( <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            id={product.id}
            rating={product.rating}
            price={product.price}
            description={product.description}
            product={product}
            flex={true}
            renderDec={true}
            renderAdd={true}
        />)}
       

    </Layout>
  )
}

export default ProductDetail

