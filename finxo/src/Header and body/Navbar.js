import React from 'react'
import './style.css'
import logo from "../delete/logo.png"
const Navbar = () => {
    const [nav,setnav] = React.useState(false) 
    const changeBackground = ()=>{
        if(window.scrollY >=50){
            setnav(true)
        }
        else{
            setnav(false)
        }
    }
    window.addEventListener('scroll',changeBackground)
return (
    <nav className={nav?"nav active": "nav"}>
        <a href='#' className='logo'>
            <img className='menu-btn' src={logo}/>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
        </label>
        <ul className="menu">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Home</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
