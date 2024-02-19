import React from "react";
import { Link } from "react-scroll";
import "./intro.css"

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="myname"> Pavani</span>
          <br /> Front End Developer
        </span>
        <p className="intropara">I am a skilled front end developer </p>

        <Link>
          <button className="btn">Hire me</button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
