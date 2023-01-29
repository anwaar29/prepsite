import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
    faYoutube
  } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
   <>
   <div className='footer'>
    
    <div className='ch2'>
        <ul type="none">
            <li>FOLLOW US</li>
            <li>
            <FontAwesomeIcon icon={faFacebook} size="2x" color='blue'/>&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faLinkedin} size="2x" color='darkblue' />&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faYoutube} size="2x"  color='red'/>&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faInstagram} size="2x"  color='darkred'/>
                </li><br/>
            <li>Contact Us</li><br/>
            <li> +91-125498722</li>
            <li>-support@PrepBytes.com</li>
        </ul>
    </div>
   
    <div className='ch4'>
    <ul type="none">
            <li>QUICK LINKS
</li><br/>
            <li>interview Notes</li>
            <li>Mock Tests</li>
            <li>Placement Program</li>
            <li>Coding Test</li>
            <li>About Us</li>
            <li>Blog</li>
        </ul>
    </div>
   </div>
   </>
  )
}

export default Footer