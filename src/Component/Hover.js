import React from 'react'
import './All3.css'

const Hover = (props) => {
  return (
    <div>
    <img src={props.img} alt='kk' className='imgcont'/><br/><br/>
        <div className='col'></div>
          <p>{props.msg}</p>
    </div>
  )
}

export default Hover