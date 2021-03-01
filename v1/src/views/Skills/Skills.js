import React from "react";
import { Container } from "@material-ui/core";
import "./Skills.scss";
import bk from "../../assets/space.jpg";
import aws from "../../assets/skills/aws.png";
import bitbucket from "../../assets/skills/bitbucket.svg";
import confluence from "../../assets/skills/confluence.jpg";
import cpp from "../../assets/skills/cpp.jpg";
import css from "../../assets/skills/css.png";
import django from "../../assets/skills/django.png";
import git from "../../assets/skills/Git.png";
import html5 from "../../assets/skills/html-5.svg";
import java from "../../assets/skills/java.png";
import jenkins from "../../assets/skills/jenkins.png";
import jira from "../../assets/skills/jira.svg";
import js from "../../assets/skills/js.png";
import python from "../../assets/skills/python.png";
import firebase from "../../assets/skills/firebase.webp";
import react from "../../assets/skills/react.png";
import reactNative from "../../assets/skills/reactNative.png";
import redux from "../../assets/skills/redux.png";
import sass from "../../assets/skills/scss.png";
import spring from "../../assets/skills/spring.png";
import sql from "../../assets/skills/sql.png";
import typescript from "../../assets/skills/typescript.svg";
import unity from "../../assets/skills/unity.png";
import figma from "../../assets/skills/figma.webp";
import sketch from "../../assets/skills/sketch.png";
import Card from "../../components/Card/Card";
import dot from '../../assets/Ellipse4.png';
import dot2 from '../../assets/Ellipse2.png';
import dot3 from '../../assets/Ellipse3.png';
import star from '../../assets/Star.png';
import star2 from '../../assets/Star2.png';

function Skills() {
  //   const [card1, setCard1] = useState(true);
  //   const [card2, setCard2] = useState(true);
  //   const [card3, setCard3] = useState(true);
  //   const moveToNext = () => {
  //     if (card1) {
  //         setCard1(false);
  //         setCard2(true);
  //       } else if (card2) {
  //         setCard2(false);
  //         setCard3(true);
  //       } else if (card3) {
  //         setCard3(false);
  //         setCard1(true);
  //       }
  //   }
  //   const moveToPrevious = () => {
  //   }

  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      className="section2"
      id="skills"
    >
      <img src={bk} alt="" className="bk-image" />
      <img src={dot} alt="" className="circle" />
      <img src={dot2} alt="" className="circle2" />
      <img src={dot3} alt="" className="circle3" />
      <img src={star} alt="" className="star" />
      <img src={star2} alt="" className="star2" />
      <div className="heading">
        <h1>Skills</h1>
      </div>
      <div className="skills">
        {/* <div className="button" onClick={()=> moveToPrevious()}>{'<'}</div> */}
        <Card height="400px" width="420px" display={true} className="card">
          <p className="card-title">Languages</p>
          <div className="skillSection">
            <div className="row">
              <img src={js} alt="" className="img" />
              JavaScript
            </div>
            <div className="row">
              <img src={typescript} alt="" className="img" />
              TypeScript
            </div>
            <div className="row">
              <img src={java} alt="" className="img" />
              Java
            </div>
          </div>
          <div className="skillSection">
            <div className="row">
              <img src={html5} alt="" className="img" />
              HTML5
            </div>
            <div className="row">
              <img src={css} alt="" className="img" />
              CSS
            </div>
            <div className="row">
              <img src={sass} alt="" className="img" />
              SASS
            </div>
          </div>
          <div className="skillSection">
            <div className="row">
              <img src={cpp} alt="" className="img" />
              C++
            </div>
            <div className="row">
              <img src={sql} alt="" className="img" />
              SQL
            </div>
            <div className="row">
              <img src={python} alt="" className="img" />
              Python
            </div>
          </div>
        </Card>

        <Card height="400px" width="420px" display={true}>
          <p className="card-title">Frameworks & Libraries</p>
          <div className="skillSection">
            <div className="row">
              <img src={react} alt="" className="img" />
              React.js
            </div>
            <div className="row">
              <img src={reactNative} alt="" className="img" />
              React Native
            </div>
            <div className="row">
              <img src={redux} alt="" className="img" />
              Redux
            </div>
          </div>
          <div className="skillSection">
            <div className="row">
              <img src={django} alt="" className="img2" />
              Django REST
            </div>
            <div className="row">
              <img src={spring} alt="" className="img" />
              SpringBoot
            </div>
            <div className="row">
              <img src={unity} alt="" className="img" />
              Unity
            </div>
          </div>
        </Card>

        <Card height="400px" width="420px" display={true}>
          <p className="card-title">Tools</p>
          <div className="skillSection">
            <div className="row">
              <img src={git} alt="" className="img" />
              Git
            </div>
            <div className="row">
              <img src={bitbucket} alt="" className="img" />
              BitBucket
            </div>
            <div className="row">
              <img src={jira} alt="" className="img" />
              Jira
            </div>
          </div>
          <div className="skillSection">
            <div className="row">
              <img src={aws} alt="" className="img2" />
              AWS
            </div>
            <div className="row">
              <img src={jenkins} alt="" className="img" />
              Jenkins
            </div>
            <div className="row">
              <img src={confluence} alt="" className="img" />
              Confluence
            </div>
          </div>
          <div className="skillSection">
            <div className="row">
              <img src={firebase} alt="" className="img" />
              Firebase
            </div>
            <div className="row">
              <img src={figma} alt="" className="img" />
              Figma
            </div>
            <div className="row">
              <img src={sketch} alt="" className="img" />
              Sketch
            </div>
          </div>
        </Card>
        {/* <div className="button" onClick={()=> moveToNext()}>{'>'}</div> */}
      </div>
    </Container>
  );
}

export default Skills;
