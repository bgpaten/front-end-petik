import React from "react";
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="hero-left">
            <h2 className="hero-title">Title :</h2>
            <h3 className="hero-genre">Genre :</h3>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, facilis voluptates ipsa, debitis, numquam doloremque
            culpa fuga explicabo modi animi alias commodi! Aperiam quod, magni
            nostrum culpa eligendi aliquid veniam.
            </p>
            <p className="hero-button">Watch</p>
          </div>
          <div className="hero-right">
            <img src="https://picsum.photos/200" alt="hero-img" className="hero-image"/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
