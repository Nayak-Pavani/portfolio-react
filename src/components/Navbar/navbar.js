import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/img/Vector.png";
import  menu from "../../assets/img/menu.png";

import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu ,setShowMenu] = useState(false)
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="Menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="MenuList"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="MenuList"
        >
          About
        </Link>
        <Link className="MenuList">Portfolio</Link>
      </div>
      <button
        className="menuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behaviour: "smooth" });
        }}
      >
        Contact Me
      </button>
      <img src={menu} alt="Menu" className="mobMenu"
       onClick={() =>{
        setShowMenu(!showMenu)
      }}
       />
      <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() =>{
            setShowMenu(false)
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() =>{
            setShowMenu(false)
          }}
        >
          About
        </Link>
        <Link className="ListItem">Portfolio</Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() =>{
            setShowMenu(false)
          }}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
