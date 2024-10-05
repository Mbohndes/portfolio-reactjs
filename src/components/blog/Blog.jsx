import React from 'react';
import "./blog.css";
import Image1 from "../../assets/blog-1ris.svg";
import Image2 from "../../assets/blog-2ris.svg";
import Image3 from "../../assets/blog-3ris.svg";

const blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Post</h2>

      <div className="div blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">UI/UX
            </span></a>
            <a href="#contact"><img src={Image1} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Creating a Stunning and Functional User Experience.
            </h3>
            <div className="blog__meta">
              <span>09 September, 2024
              </span>
              <span className="blog__dot">.</span>
              <span>Awan</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">Graphic Design</span></a>
            <a href="#contact"><img src={Image2} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Bring Visuals to Life with Unlimited Creativity
            </h3>
            <div className="blog__meta">
              <span>07 September, 2024
              </span>
              <span className="blog__dot">.</span>
              <span>Awan</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">Portfolios</span></a>
            <a href="#contact"><img src={Image3} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">The Creative Journey in Design and Development</h3>
            <div className="blog__meta">
              <span>05 October, 2024</span>
              <span className="blog__dot">.</span>
              <span>Awan</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default blog