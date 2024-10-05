import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">17 y</h3>
                <span className="about__subtitle">Age</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">360+</h3>
                <span className="about__subtitle">Cup Of Coffe</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">19+</h3>
                <span className="about__subtitle">Project Completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">10+</h3>
                <span className="about__subtitle">Champion in everything</span>
            </div>
        </div>


    </div>
  )
}

export default AboutBox