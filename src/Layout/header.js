import React from 'react'
import {Link} from 'react-router-dom'
const Header = (props) => {
  return (
    <header>
     <div className="page_width">
        <div className="nav_desktop">
            <div className="logo"><img src={props.Logo} alt="Logo Image" /></div>
            <nav>
                <ul>
                    <li className='paddinggive'><Link to="/">Home</Link></li>
                    <li className='paddinggive'><Link to="/service">Services</Link></li>
                    <li className='paddinggive'><Link to="/contact-us">Contact Us</Link></li>
                    <li id='phoneText'><a href="tel:+923086112359" >{props.telIcon}<span> +92 308 6112359</span></a></li>
                </ul>
            </nav>
        </div>
     </div>
    </header>
  )
}

export default Header