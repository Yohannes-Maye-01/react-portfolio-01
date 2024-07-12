import React from "react";
import "./Header.css";
import Cta from "./CTA";
import me from "../../assets/yohannes.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>  
      <section id="home" className="container header_container">
        <h5>Hello I&apos;m</h5>
        <h1>Yohannes Maye</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </section>
    </header>
  );
};
export default Header;
9