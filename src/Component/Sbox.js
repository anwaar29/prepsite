import React from 'react'
import './All2.css'
const Sbox = (props) => {
  return (
   <>
   <div className='baap'>
     <img src={props.src} alt='erroe' height='50px' width='50px'/> <span classname='s'>{props.title}</span>
     <span  className='s1' style={{fontSize:'14px',color:'lightgrey'}}>{props.msg}</span>
       
    </div>
   </>
  )
}

export default Sbox