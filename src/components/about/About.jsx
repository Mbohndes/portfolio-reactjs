import React from 'react'
import "./about.css";
import Image from "../../assets/avatar-2ris copy.svg";
import AboutBox from './AboutBox';

const about = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am a 17-year-old Computer Science student who has expertise in electronics, programming, as well as experience as a Network Technician. I'm also active as a frontend and web developer, mastering HTML, CSS, JavaScript, and React, and has an interest in graphic design.</p>
              <a href="#contact" className="btn">Contact Me</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">65%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div> 
          

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">ui/ux</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number pho">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>

          

        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default about