import React from 'react'

const Header = (props) => {
  return (
    <header>
     <div className="page_width">
        <div className="nav_desktop">
            <div className="logo"><img src={props.Logo} alt="Logo Image" /></div>
            <nav>
                <ul>
                    <li className='paddinggive'><a href="javascript:void(0);">Home</a></li>
                    <li className='paddinggive'><a href="javascript:void(0);">Services</a></li>
                    <li className='paddinggive'><a href="javascript:void(0);">Contact Us</a></li>
                    <li id='phoneText'><a href="tel:+923086112359" >{props.telIcon}<span> +92 308 6112359</span></a></li>
                </ul>
            </nav>
        </div>
     </div>
    </header>
  )
}

export default Header