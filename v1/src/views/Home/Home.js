/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <Hero/> 
            <About/>
            <Skills/>
        </div>
    )
}

export default Home;
