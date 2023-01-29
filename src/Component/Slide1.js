import React from 'react'
import './All3.css'
import img1 from './Images/slideimg1.png'
import img2 from './Images/r2.png'
import img3 from './Images/r1.png'
import Team from './Team'
const Slide1 = () => {
  return (
    <>
        <img src={img1} alt='tt' className='slide1'/>
        <img src={img2} alt='tt' className='slide2'/>
        <img src={img3} alt='tt' className='slide3'/>
        
        <div className='conttext'>
        <span style={{fontSize:'22px',color:'blue'}}>Us In Media</span><br/>
       <br/> <p>The Building of PrepBytes Coding Empire - How, When & Where?</p>
        <span>15 Jul 2019, 08:40 PM IST</span>
      
        </div>
        <span className='offer'>What We Offer</span>
        <span className='normaltext'>We teach students the strategic approach to solve coding problems for cracking the placement interviews effortlessly.</span>
    </>
  )
}

export default Slide1