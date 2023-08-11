import React from 'react'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
        <FaTwitterSquare color='#918E9B' />
        <FaFacebookSquare color='#918E9B'  />
        <FaInstagramSquare color='#918E9B'  />
        <FaGithubSquare color='#918E9B'  />
    </div>
  )
}

export default Footer