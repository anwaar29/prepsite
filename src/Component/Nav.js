
import React from 'react'
import './All.css'
import p_logo from './Images/p_logo.png'

import DROP from './DROP'
const Nav = () => {
  return (
  <>
 
   <div className='parent'>
     <img src={p_logo} alt=' Found' id='logoimg' />
     <div id='sbox'>
        <button id='btn1'>Login</button> &nbsp;&nbsp;&nbsp;
        <button id='btn2'>Sign Up</button><br/>
     </div>
     </div>
    <nav className='navbar'><DROP/></nav>
     
  </>
  )
}

export default Nav