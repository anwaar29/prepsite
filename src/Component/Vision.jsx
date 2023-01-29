import React from 'react'
import './All.css'
import './All2.css'
import img1 from './Images/bgcircle.png'
import img2 from './Images/removebg.png'
import t1 from './Images/web.jpg'
import t2 from './Images/growth.jpg'
import t3 from './Images/coding.jpg'
import t4 from './Images/devolopment.jpg'
import scholar from './Images/scholar.jpg'
import uni from './Images/Uni.jpg'
import ed from './Images/ed.jpg'
import social from './Images/social.jpg'
import Sbox from './Sbox'
import Team from './Team'
import AM from './AM'
import sam from './Images/sam.jpg'
import amazon from './Images/amazon.jpg'
import linkedin from './Images/linkedin.jpg'
import mamta from './Images/mamta.png'
import aditya from './Images/aditya.png'
import p1 from './Images/p1.jpg'
import p2 from './Images/p2.jpg'
import Group from './Group'

const Vision = () => {
  return (
    <>
      <div className="overlap">
        <img src={img1} id='img1' alt='error' />
        <img src={img2} id='img2' alt='error' />
        <img src={t1} id='t1' alt='error' />
        <img src={t2} id='t2' alt='error' />
        <img src={t3} id='t3' alt='error' />
        <img src={t4} id='t4' alt='error'  />
      </div>

      <div className='visionparent'>
        <h1>Our Vision  <span className='and'>&</span> Mission</h1>
        <div className='txtcont'></div>
        <div className='contsky'>

          <Sbox src={scholar} title='10+' msg='Students Enrolled' />
          <Sbox src={uni} title='1000+' msg='Reaches in College' />
          <Sbox src={ed} title='10k+' msg='Hours of Learning' />
          <Sbox src={social} title='150+' msg='Social Community' />
        </div>
      </div>
      <div className='bgimg'>
        <div className='blueline'></div>
        <Team  msg="Our Team"/>
        <div className='ambox'>
          <AM
            img1={img1}
            mamta={mamta}
            img3={linkedin}
            name="Mamta Kumari"
            s1={amazon}
            s2={sam}

          />

          <AM
            img1={aditya}
            mamta={aditya}
            img3={linkedin}
            name="Aditya Verma"
            s1={p1}
            s2={p2}

          />
        </div>
      <div className='finalgroup'>
      <Group />
      </div>
      </div>
    </>
  )
}

export default Vision