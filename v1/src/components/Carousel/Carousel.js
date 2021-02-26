import React, {useEffect} from 'react';
import './Carousel.scss';
// import venus from '../../assets/venus.png';
import aws from '../../assets/skills/aws.png';
import bitbucket from '../../assets/skills/bitbucket.svg';
import confluence from '../../assets/skills/confluence.jpg';
import cpp from '../../assets/skills/cpp.jpg';
import css from '../../assets/skills/css.png';
import django from '../../assets/skills/django.png';
import git from '../../assets/skills/Git.png';
import html5 from '../../assets/skills/html-5.svg';
import java from '../../assets/skills/java.png';
import jenkins from '../../assets/skills/jenkins.png';
import jira from '../../assets/skills/jira.svg';

export default function Carousel() {

    useEffect(()=> {
        var block = document.getElementsByClassName('img'),
        increase = Math.PI * 2 / block.length,
        x = 0, y = 0, angle = 0;

        for (var i = 0; i < block.length; i++) {
            var elem = block[i];
            x = 160 * Math.cos(angle) + 150;
            y = 160 * Math.sin(angle) + 150;
            elem.style.position = 'absolute';
            elem.style.left = x + 'px';
            elem.style.top = y + 'px';
            angle += increase;
        }
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel" id="carousel">
                <div className="img"><img src={aws} alt="" className="float"/></div>
                <div className="img"><img src={bitbucket} alt="" className="float"/></div>
                <div className="img"><img src={confluence} alt="" className="float"/></div>
                <div className="img"><img src={css} alt="" className="float"/></div>
                <div className="img"><img src={cpp} alt="" className="float"/></div>
                <div className="img"><img src={django} alt="" className="float"/></div>
                <div className="img"><img src={git} alt="" className="float"/></div>
                <div className="img"><img src={html5} alt="" className="float"/></div>
                <div className="img"><img src={java} alt="" className="float"/></div>
                <div className="img"><img src={jenkins} alt="" className="float"/></div>
                <div className="img"><img src={jira} alt="" className="float"/></div>
            </div>
        </div>
    )
}
