import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/Logo.png'
import {BsFillTelephoneFill} from 'react-icons/bs'
const Header = () => {
  return (
    <header>
     <div className="page_width">
        <div className="nav_desktop">
            <div className="logo"><img src={Logo} alt="Logo Image" /></div>
            <nav>
                <ul>
                    <li className='paddinggive'><Link to="/">Home</Link></li>
                    <li className='paddinggive'><Link to="/service">Services</Link></li>
                    <li className='paddinggive'><Link to="/contact-us">Contact Us</Link></li>
                    <li id='phoneText'><a href="tel:+923086112359" ><BsFillTelephoneFill /><span> +92 308 6112359</span></a></li>
                </ul>
            </nav>
        </div>
     </div>
    </header>
  )
}

export default Header