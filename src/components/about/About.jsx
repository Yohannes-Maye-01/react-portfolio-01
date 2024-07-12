import React from 'react'
import "./About.css"
import me_about from "../../assets/BDU1410792.jpg"
import { FaUserSecret } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>
        About Me
      </h2>
      <div className='container about_container'>
        <div className="about_me">
        <div className='about_me-image'>
        
        <img src={me_about} alt="me_about" />
      
    </div>
        </div>
       
        <div className='about_content'>
          <div className="about_cards">
           
            <article className="about_card">
            <a> <FaAward /></a>
              <span>Experiance</span>
              <p>2+ Years Of Experiance</p>

            </article>
            <article className="about_card">
            <a><FaUserSecret /></a>
              <span>Clients</span>
              <p>4 Clients </p>

            </article>
            <article className="about_card">
            <a> <FaFolder /></a>
              <span>Projects</span>
              <p>10 comleted</p>

            </article>
          </div>
          <div className='about_text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis, doloribus incidunt possimus beatae aliquam voluptates delectus explicabo et quaerat dolores suscipit illum sit maxime doloremque eius rem ad natus!
          </div>
          <div className='btn'>
            let&apos;s build something together
          </div>
        </div>


      </div>
    </section>
  )
}

export default About