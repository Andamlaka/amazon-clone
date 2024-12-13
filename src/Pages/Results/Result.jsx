import React, { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/productCard'
import Classes from "./Result.module.css"
const Result = () => {
  const [results, setResults] = useState([])
  const { catagoryName } = useParams()

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => {
        setResults(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Layout>
     <section>
      <h1 style={{padding: "30px"}}>Result</h1>
      <p style={{padding: "30px"}}>Catagory / {catagoryName}</p>
      <hr />
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
          />
        ))}
      </div>
     </section>
    </Layout>
  )
}

export default Result
