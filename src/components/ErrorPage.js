import React from 'react'
import {
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from './Footer';
import Header from './Header';

const ErrorPage = () => {
  return (
    <div className='error'>
      <Header/>
      <h1 style={{color: "red", marginTop: "50px", textAlign: "center"}}>Oops!!!! Sorry Page not found</h1>
      <p style={{marginTop: "20px", textAlign: "center"}}>Please contact us if you keep getting this error!! </p>
      <ul className='ErrorPage'>
        <li>
         <a href='https://twitter.com/lmash12' target='_blank' rel='noopener noreferrer' aria-label='twitter profile link'><FaTwitter color='white' /></a>
        </li>
        <li>
        <a href='https://wa.me/+260978386755?text=hello' target='_blank' rel='noopener noreferrer' aria-label='Whatsapp contact link'><FaWhatsapp color='white'/></a>
        </li>
      </ul>
      <Footer/>
    </div>
  )
}

export default ErrorPage