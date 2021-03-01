/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import headshot from '../../assets/headShot.jpg';
import Fade from 'react-reveal/Fade';
import Container from '@material-ui/core/Container';
import './About.scss';

function About() {
  return (
    <Container maxWidth="lg" className="section1" id="about">
      <div className="heading">
        <h1>About Me</h1>
      </div>
      <div className="about">
        <Fade left duration={1500}>
          <div className="about-text">
            <p>Here is a little about me.</p>
            <p>I'm Nikhil, a software developer based in NJ.</p>
            <p>
              My mission is to create life enhancing tools that actually make a
              great impact, whether that be websites, applications, or anything
              in between.
            </p>
            <p>
              BS in Computer Science & Engineering Technology from{" "}
              <a target="_blank" href="https://www.njit.edu/">
                New Jersey Institute of Technology
              </a>
              . Currently working at{" "}
              <a target="_blank" href="https://www.adp.com/">
                ADP
              </a>{" "}
              as an Application Developer, building out next-gen payroll
              solutions.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="skills">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript </li>
              <li>React & Redux</li>
              <li>HTML & CSS / SCSS</li>
              <li>Java</li>
              <li>Node.js</li>
            </ul>
          </div>
        </Fade>
        <Fade right duration={1500}>
          <div className="about-image">
            <img src={headshot} alt="me" className="img" />
          </div>
        </Fade>
      </div>
    </Container>
  );
}

export default About;
