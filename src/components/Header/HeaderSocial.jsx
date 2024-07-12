import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
     <a href="https://linkedin.com"> <BsLinkedin/> </a>
     <a href="https://facebook.com"><FaFacebookF /> </a>
     <a href="https://github.com"><FaGithub /> </a>
    </div>
  )
}

export default HeaderSocial