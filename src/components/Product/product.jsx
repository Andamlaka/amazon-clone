import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './productCard'
import classes from './product.module.css'
import Loader from '../Loader/Loader'

const Product = () => {
    const [products, setProducts] = useState([])
    const [isloading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setProducts(res.data)  
            setIsLoading(false) 
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    },[])

    return (
        <>
        {
            isloading ? (<Loader />) :(<section className={classes.products_container}>
                {
                    products.map((singleProduct) => (
                        <ProductCard 
                            key={singleProduct.id} 
                            image={singleProduct.image}
                            title={singleProduct.title}
                            id={singleProduct.id}
                            rating={singleProduct.rating}
                            price={singleProduct.price}
                            description={singleProduct.description}
                            renderAdd={true}

                        />
                    ))
                }
            </section>)
        }
        
        </>
    )
}

export default Product
