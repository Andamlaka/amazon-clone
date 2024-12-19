import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductCard from '../../components/Product/productCard'
import { DataContext } from '../../components/DataProvider/DataProvider'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import { Type } from '../../components/Utility/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext)

   const total = basket.reduce((amount, item) => {
  return item.price *item.quantity + amount
  },0)
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: item
      
      
    });
  }

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id: id
    });
  }

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return <section className={classes.cart_product}>
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
              <div className={classes.btn_container}>
                <button className={classes.btn} onClick={()=>increment(item)}>
                <IoIosArrowUp size={30} />
                </button>
                <span>{item.quantity}</span>
                <button className={classes.btn} onClick={()=>decrement(item.id)}>
                <IoIosArrowDown size={30} />
                </button>
              </div>
            </section>
})
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
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

