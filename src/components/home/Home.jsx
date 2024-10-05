import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1ris.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Riski Kurniawan</h1>
        <span className="home__education">I'am a Computer Science Student
        </span>

        <HeaderSocials />
        <a href="#contact" className="btn">Contact Me</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default home