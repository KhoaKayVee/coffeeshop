import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container container">
        <div className="home-content">
          <span className="home-subtitle">Welcome To Coffero</span>
          <h1 className="home-title">
            Discover Amazing Coffee House & Get Enery
          </h1>
          <p className="home-description">
            There are many variations of passages available but the majority
            have suffered alteration in some from by injected humour or
            randomised words.
          </p>
        </div>

        <div className="home-btns">
          <a href="#menu" className="btn">
            Check Menu
          </a>
          <a href="#reservation" className="btn home-btn">
            Book Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
