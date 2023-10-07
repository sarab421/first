import React from 'react'
import footer_logo_img from '../images/Logo.png'
import {BsFillTelephoneFill} from 'react-icons/bs'
const Footer = () => {
  return (
    <>

      <section>
        
          <div className="quick_service">
            <h2>Quick Service On Emergency</h2>
            <a href='tel:+923086112359'> <BsFillTelephoneFill /> <span>+92 308 6112359</span></a>
          </div>
       
      </section>
      <footer>
        <div className="page_width">
          <div className="footer_elements">
            <div className="footer_about">
              <div className="footer_img"><img src={footer_logo_img} alt="Logo Image" /></div>
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
            <nav>
              <ul>
                <li><a href="javascript: void(0)">Home</a></li>
                <li><a href="javascript: void(0)">Services</a></li>
                <li><a href="javascript: void(0)">Contact Us</a></li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li><a href="javscript: void(0)">Facebook</a></li>
                <li><a href="javscript: void(0)">Twitter</a></li>
                <li><a href="javscript: void(0)">Linkedin</a></li>
                <li><a href="javscript: void(0)">Instagram</a></li>
              </ul>
            </nav>
            <div className="footer_info"> 
           <div> <a href="tel:+923086112359">+92 308 6112359</a></div>
            <div><a href="mailto:info@homecomfort.com">info@homecomfort.com</a></div>
            <form className='footer_form' action="">
              <input type="text" name="" id=""  value="Enter Email"/>
              <input type="submit" value="Send" />
            </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer