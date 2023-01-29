import React from 'react'
import './All2.css'

const AM = (props) => {
  return (
    <>
    <div className='AM'>
        <div className='ambox1'> 
        <img src={props.img1} alt='j' height='180px' width='180px' id='m1'/>
        <img src={props.mamta} alt='j' height='180px' width='180px' id='m2'/>
        <img src={props.img3}  id='m3' alt='gg'/>
         <span className='name'>{props.name}</span>
         <span className='co'>Co-Founder</span>
        <img src={props.s1}  className='amazon' width='100px' height='30px' alt='j'/>
        <img src={props.s2}    className='sam' width='70px' height='35px' alt='j'/>

        </div>
        
    </div>
    </>
  )
}

export default AM