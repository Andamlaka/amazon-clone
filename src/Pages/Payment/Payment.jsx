import React, { useContext, useState } from 'react'
import classes from './payment.module.css'
import Layout from '../../components/Layout/Layout'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from './../../components/Product/productCard'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../Api/axios' 
const Payment = () => {
  const [{ user, basket }] = useContext(DataContext)
  console.log(user)
  // total item
  const totalItem = basket?.reduce((amount, item) => {
    return item.quantity + amount
  }, 0)
  // total  price
  const total = basket.reduce((amount, item) => {
    return item.price * item.quantity + amount
  }, 0)

  const [cardError, setCardError] = useState(null)
  const stripe = useStripe()
  const elements = useElements()

  const handleChange = (e) => {
    e.error?.message ? setCardError(e?.error?.message) : setCardError('')
  }

  const handlePayment =async  (e) => {
    e.preventDefault()

    try{
       //1.
    //backend || function contact to the client secret
      const response=await axiosInstance({
        method:'POST',
        url:`/payment/create?total=${total}`,
      })

      console.log(response.data) 
      const clientSecret = response.data?.clientSecret; 
      //2.
    //client side conformation
    const confirmation = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method:{
          card:elements.getElement(CardElement)
        }
      }
     
    )

    console.log(confirmation)
    }catch(error){

    }

    //3.
    //after the conformation -->firestore database save,clear basket
  }
  return (
    <Layout>
      {/* header */}

      <div className={classes.payment_header}>
        Checkout ({totalItem} ) items
      </div>
      {/*  payment method  */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>ethiopia</div>
            <div>addis ababa </div>
          </div>
        </div>
        <hr />

        {/* product */}
        <div className={classes.flex}>
          <h3>Review Items and the delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard
                key={item.id}
                //product={item}
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
                flex={true}
              />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}

        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: 'red' }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: 'flex', gap: '10px' }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type='submite'>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Payment
