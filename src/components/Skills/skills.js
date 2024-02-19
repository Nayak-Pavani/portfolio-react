import React ,{useRef}from "react";
import "./skills.css";
import emailjs from '@emailjs/browser';

const Skills = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_pavcr1t', 'service_pavcr1t', form.current, {
            publicKey: 'LOfaaKW2bkPIaikJc',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section>
      <div id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I have a solid foundation in HTML, the backbone of web development.
          Proficient in creating well-structured, semantic markup to build the
          foundation of web pages.
        </span>
        <div className="skillBars">
          <div className="bar">
            <div className="skillText">
              <h2>Web Design</h2>
              <p> This is a demo text</p>
            </div>
          </div>
        </div>
        <div id="contact">
          <h1 className="skillTitle">Contact Me</h1>
          <span className="skillDesc">
            Please fill out the form below to discuus any work oppurtunities
          </span>
          <form className="contactForm" ref={form}  onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name="your_name" />
            <input type="email"  className="email" placeholder="Your Email" name="your_email"/>
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
            <button type="submit" value="send" className="submitbtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Skills;
