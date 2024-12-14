import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom'
const ProductCard = ({ image, title, id, rating, price,flex ,description, renderDec}) => {
  
  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed: ""}`}>
      <Link to={`/products/${id}`}>
      detail
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
     {
      renderDec && <div style={{maxWidth:"750px"}}>{description}</div>
     }
      <div className={classes.rating}>
        {/* rating */}
        <Rating value={rating?.rate} precision={0.1} />
        {/* rating counter */}
        <small>{rating?.count}</small>
      </div>
      <div>
        {/* price */}
        <CurrencyFormat amount={price} />
      </div>
      <button className={classes.button}>
        Add to cart
      </button>
      </div>
    </div>
  )
}


export default ProductCard;