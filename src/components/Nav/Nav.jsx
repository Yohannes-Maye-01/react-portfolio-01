import React from 'react'
import './Nav.css'
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa6";
import { RiServiceLine } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";


const Nav = () => {
  return (
    <section id='nav'>
  <a href="#home"><FaHome /></a>
  <a href="#about"><FaUserAlt /></a>
  <a href="#experience"><FaRegAddressBook /></a>
  <a href="#services"><RiServiceLine /></a>
  <a href="#portfolio"></a>
  <a href="#testimonials"></a>
  <a href="#contact"><MdContactMail /></a>
    </section>
  )
}

export default Nav