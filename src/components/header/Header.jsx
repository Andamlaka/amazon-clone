import React from 'react'
import classes from './Header.module.css'
import { CiLocationOn } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
import { BiCart } from 'react-icons/bi'
import LowerHeader from './LowerHeader'
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo section  */}
          <div className={classes.logo_container}>
            <a href="" className="classes.language">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt=""
              />
            </a>
          </div>
          <div className={classes.delivery}>
            <span>
              <CiLocationOn />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search product" />
            <CiSearch size={30} />
          </div>

          {/* other sections*/}

          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1200px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />

              <select>
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <p>Sign In</p>
              <span>Account and Lists</span>
            </a>
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  )
}

export default Header
