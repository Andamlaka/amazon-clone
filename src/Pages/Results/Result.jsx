import React, { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/productCard'
import Classes from './Result.module.css'
import Loader from '../../components/Loader/Loader'
const Result = () => {
  const [results, setResults] = useState([])
  const { catagoryName } = useParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => {
        setResults(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }, [])

  return (
    <Layout>
      <section>
        <h1 style={{ padding: '30px' }}>Result</h1>
        <p style={{ padding: '30px' }}>Catagory / {catagoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={Classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                id={product.id}
                rating={product.rating}
                price={product.price}
                product={product}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Result
