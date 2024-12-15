import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductCard from '../../components/Product/productCard'
import { DataContext } from '../../components/DataProvider/DataProvider'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import ClassNames from './Cart.module.css'
const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext)

   const total = basket.reduce((amount, item) => {
  return item.price + amount
  },0)
  

  return (
    <Layout>
      <section className={ClassNames.container}>
        <div className={ClassNames.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item, i) => (
              <ProductCard
                key={i}
                product={item}
                image={item.image}
                title={item.title}
                id={item.id}
                rating={item.rating}
                price={item.price}
                description={item.description}
                renderDec={true}
                renderAdd={false}
                flex={true}
              />
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={ClassNames.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>  
        )}
      </section>
    </Layout>
  )
}

export default Cart

