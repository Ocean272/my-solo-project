import React from 'react'
import profilepic from '../assets/Rectangle 90.png'
import {TbMailFilled} from 'react-icons/tb'
import {FaLinkedin} from 'react-icons/fa'


const Info = () => {
  return (
    <div className='info-details'>
        <header className='info-details-child'>
            <img src={profilepic} alt='' width="310px"/>
            <h1>Ayazhan Kadessova</h1>
            <h3>Frontend Developer</h3>
            <p>Kadessovaayazhan@gmail.com</p>
        </header>
        <>
            <button className='btn-email'>
              <span className='email-icon'><TbMailFilled/></span>
              Email
            </button>
            
            <button className='btn-linkedin'>
              <span className='linkedin-icon'><FaLinkedin /></span>
              LinkedIn
            </button>
        </>
    </div>
    
  )
}

export default Info