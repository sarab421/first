import React from 'react'

import './style.css'
const Components = (props) => {
  return (
    <div className='container'> 
    <div className="contentContainer">
      <img src={props.img} />  
    <div className="overlay">
      <div className="overlay_insider">
        <h2>{props.caption}</h2>
        <button>BOOK NOW</button>
      </div>
      

    </div>
    </div>
    </div>
  )
}

export default Components