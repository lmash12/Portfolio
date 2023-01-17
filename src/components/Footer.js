import React from 'react'
import {
    FaTwitter,
    FaFacebook,
    FaGithub,
    FaWhatsapp,
  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerDesign'>
        <nav>
        <ul className='footer-list'>
            <li> <a href='https://facebook.com/lmashaya' target='_blank' rel='noopener noreferrer' aria-label='facebook profile link'><FaFacebook color='white'/></a>  </li>
            <li> <a href='https://twitter.com/lmash12' target='_blank' rel='noopener noreferrer' aria-label='twitter profile link'><FaTwitter color='white' /></a> </li>
            <li> <a href='https://github.com/lmash12' target='_blank' rel='noopener noreferrer' aria-label='GitHub profile link'><FaGithub color='white'/></a> </li>
            <li> <a href='https://wa.me/+260978386755?text=hello' target='_blank' rel='noopener noreferrer' aria-label='Whatsapp contact link'><FaWhatsapp color='white'/></a> </li>
            <li>LESLEY MASHAYA <span>© 2023</span> </li>
        </ul>
        </nav>
    </div>
  )
}

export default Footer