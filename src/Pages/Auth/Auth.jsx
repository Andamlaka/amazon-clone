import React from 'react'
import { useState, useContext } from 'react'
import classes from './Auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../components/Utility/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { ClipLoader } from 'react-spinners'
import { DataContext } from '../../components/DataProvider/DataProvider'
const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState({ signIn: false, signUp: false })

  const [{ user }, dispatch] = useContext(DataContext)
  const navigate = useNavigate()

  console.log(user)

  const authHandler = async (e) => {
    e.preventDefault()
    console.log(e.target.name)
    if (e.target.name === 'signin') {
      //firebase login
      setLoading({ ...loading, signIn: true })
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: 'SET_USER',
            user: userInfo.user,
          })
          setLoading({ ...loading, signIn: false })
          navigate('/')
        })
        .catch((err) => {
          setError(err.message)
          setLoading({ ...loading, signIn: false })
        })
    } else {
      //firebase register
      setLoading({ ...loading, signUp: true })
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: 'ADD_USER',
            user: userInfo.user,
          })
          setLoading({ ...loading, signUp: false })
          navigate('/')
        })
        .catch((err) => {
          setError(err.message)
          setLoading({ ...loading, signUp: false })
        })
    }
  }

  //console.log(password, email)

  return (
    <section className={classes.login}>
      {/*logo*/}
      <Link>
        <img
          src="https://xwiki.com/en/download/company/references/amazon/amazon.jpg"
          alt=""
        />
      </Link>
      {/*form*/}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              vlue={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
            <ClipLoader color="#000" size={15} />
            ):(  'Sign In'
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to AMAZONE FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* Creat account btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerButton}
        >
            {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
            ):(  ' Create your Amazon Account'
            )}
        </button>
        {error && <p style={{ paddingTop: '5px', color: 'red' }}>{error}</p>}
      </div>
    </section>
  )
}

export default Auth
