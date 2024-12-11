import React from 'react'
import { IoMenuSharp } from 'react-icons/io5'
import classes from './Header.module.css'

const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <IoMenuSharp />
        </li>
        <li>All</li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registery</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default LowerHeader
