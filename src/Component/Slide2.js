import React from 'react'
import './All3.css'
import img1 from './Images/one.jpg'
import Hover from './Hover'
const Slide2 = () => {
  return (
   <>
   <div className='slideparent'>
   <Hover msg='Industry expert mentor assisted course leading to guaranteed placements' id='h1' img={img1}/>
   <Hover msg='Industry expert mentor assisted course leading to guaranteed placements' id='h2' img={img1}/>
   <Hover msg='Industry expert mentor assisted course leading to guaranteed placements' id='h3' img={img1}/>

 
   </div>
   </>
  )
}

export default Slide2