import React, { useContext } from 'react'
import classes from './Header.module.css'
import { CiLocationOn } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
import { BiCart } from 'react-icons/bi'
import LowerHeader from './LowerHeader'
import { Link } from 'react-router-dom'
import { DataContext } from '../../components/DataProvider/DataProvider'
const Header = () => {
 
  const [{basket}, dispatch] = useContext(DataContext)

console.log(basket.length)
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo section  */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt=""
              />
            </Link>
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
              <option  value="" selected>All</option>
              
            </select>
            <input type="text" name="" id="" placeholder="Search product" />
            <CiSearch size={45} />
          </div>

          {/* other sections*/}

          <div className={classes.order_container}>
            <Link  to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1200px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />

              <select>
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/auth">
              <p>Sign In</p>
              <span>Account and Lists</span>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
      
    </section>
  )
}

export default Header
