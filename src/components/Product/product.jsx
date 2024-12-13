import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './productCard'
import classes from './product.module.css'

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setProducts(res.data)   
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <section className={classes.products_container}>
            {
                products.map((singleProduct) => (
                    <ProductCard 
                        key={singleProduct.id} 
                        image={singleProduct.image}
                        title={singleProduct.title}
                        id={singleProduct.id}
                        rating={singleProduct.rating}
                        price={singleProduct.price}
                    />
                ))
            }
        </section>
    )
}

export default Product
