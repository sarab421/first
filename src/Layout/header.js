import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/Logo.png'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { FaBars } from "react-icons/fa";
import '../responsive/responsive.css'
const Header = () => {
  return (
    <header>
     <div className="page_width">
        <div className="nav_desktop">
          <div className="menu_bars">
            <FaBars/>
          </div>
            <div className="logo"><img src={Logo} alt="Logo" /></div>
            <nav>
                <ul>
                    <li className='paddinggive '>
                      <Link to="/">Home</Link>
                      </li>
                    <li className='paddinggive service_bar'><Link to="/service">Services</Link>
                    <div className="inner_bar_open">
                        <ol>
                          <li>AC Services</li>
                          <hr />
                          <li>Duct Cleaning</li>
                          <hr />
                          <li>Handyman</li>
                          <hr />
                          <li>Plumbing</li>
                          <hr />
                          <li>Electrical</li>
                          <hr />
                          <li>Painting</li>
                          <hr />
                          <li>Water Tank Cleaning</li>
                        </ol>
                        </div>
                    </li>
                    <li className='paddinggive'><Link to="/contact-us">Contact Us</Link>
                   
                    </li>
                    <li id='phoneText'><a href="tel:+923086112359" ><BsFillTelephoneFill /><span> +92 308 6112359</span></a></li>
                </ul>
            </nav>
        </div>
     </div>
    </header>
  )
}

export default Header