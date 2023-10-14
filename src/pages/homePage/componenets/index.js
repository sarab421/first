import React from 'react'
import Ac_service_img from '../../../images/Ac_service_img.png'
import './style.css'
const Components = () => {
  return (
    <div className='container'> 
    <div className="contentContainer">
      <img src={Ac_service_img} />  
    <div className="overlay">
      <div className="overlay_insider">
        <h2>Ac Service</h2>
        <button>BOOK NOW</button>
      </div>
      

    </div>
    </div>
    </div>
  )
}

export default Components