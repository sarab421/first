import React from 'react'
import "./style.css"
const OurClient = (props) => {
  return (
    <div>
      <div className='top_division'>
        <div className='image_of_client'><img src={props.image} alt="" /></div>
        <div className='name_time'>
          <h3>{props.name}</h3>
          <div>{props.time}</div>
        </div>
      </div>
      <div className='bottom_division'><h4 >{props.comment}</h4></div>
    </div>
  )
}

export default OurClient