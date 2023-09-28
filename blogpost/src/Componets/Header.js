import React from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Header = () => {
  React.useEffect(()=>{
    axios('http://localhost:5121/profile',{withCredentials:true})
  },[])
  return (

    <div>
        <header className="headerpart">
          <a className="links logo">asdsd<img src="" /></a>
          <nav className='links'>
            <a><Link to ="/login" className='link'>Home</Link></a>
            <a><Link to ="/login" className='link'>Login</Link></a>
            <a><Link to ="/register" className='link'>Register</Link></a>
            <a><Link to ="/login" className='link'>About us</Link></a>
          </nav>
        </header>
    </div>
  )
}

export default Header
