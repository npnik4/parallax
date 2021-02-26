/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Hero from '../components/Hero/Hero';
import Container from '@material-ui/core/Container';
import './Home.scss';
import headshot from '../assets/headShot.jpg';
// import Carousel from '../components/Carousel/Carousel';

function Home() {
    return (
        <div className="home">
            {/* <Container maxWidth="xl" disableGutters> */}
                <Hero/> 
            {/* </Container> */}
            <Container maxWidth="xl" className="section1">
                <div className="heading" id="about">
                    <h1>About Me</h1>
                </div>
                <div className="about">
                    <div className="about-text">
                        <p>Here is a little about me.</p>
                        <p>I'm Nikhil, a software developer based in NJ.</p>
                        <p>My mission is to create life enhancing tools that actually make a great impact, whether that be websites, applications, or anything in between.</p>
                        <p>BS in Computer Science & Engineering Technology from <a target="_blank" href="https://www.njit.edu/">New Jersey Institute of Technology</a>. Currently working at <a target="_blank" href="https://www.adp.com/">ADP</a> as an Application Developer, building out next-gen payroll solutions.</p>
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
                    <div className="about-image">
                        <img src={headshot} alt="me" className="img"/>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Home
