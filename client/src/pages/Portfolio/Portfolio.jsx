import React from 'react';
import "./Portfolio.css"
import Couchella from "./images/COUCHELLA.png";
import JustDocIt from "./images/just-doc-it.png";
import JsQuiz from "./images/JavaScript-Quiz.png";
import WDSched from "./images/work-day-scheduler.png";
import Weather from "./images/Weather-Dashboard.png";

const Portfolio = () => {
    return (
        <main className="content">
            <h1 className="display-4">Portfolio</h1>
            <hr className="my-4"/>
            <section className="row">
                <figure className="col-sm-3">
                <a href="https://jadavianett.github.io/project-1/">COUCHELLA</a>
                <br/>
                <a href="https://github.com/jadavianett/project-1/projects/1">GitHub Link</a>
                <br/>
                <img
                      className="img img-thumbnail"
                      src={Couchella}
                      alt="COUCHELLA"
                      width="350"
                      height="350"
                    />
                </figure>
                <figure className="col-sm-3">
                    <a href="http://www.just-doc-it.com/">Just Doc It</a>
                    <br/>
                    <a  href="https://github.com/jamjon94/Just-Doc-It">GitHub Link</a>
                    <br/>
                    <img 
                    className="img img-thumbnail"
                    src={JustDocIt}
                    alt="Just Doc It App"
                    width="350"
                    height="350"/>
                </figure>
                <figure className="col-sm-6">
                  <a href="https://jamjon94.github.io/Javascript-Quiz/">JavaScript Quiz</a>
                  <br/>
                  <a href="https://github.com/jamjon94/Javascript-Quiz">GitHub Link</a>
                <br/>  
                <img
                    className="img img-thumbnail"
                    src={JsQuiz}
                    alt="JavaScript Coding Quiz"
                    width="350"
                    height="350"
                  />
            </figure>
            <figure className="col-sm-3">
                  <a href="https://jamjon94.github.io/Work-Day-Scheduler/">Work Day Scheduler</a>
                  <br/>
                  <a href="https://github.com/jamjon94/Work-Day-Scheduler">GitHub Link</a>
                  <br/>
                  <img
                    className="img img-thumbnail"
                    src={WDSched}
                    alt="Word Day Scheduler"
                    width="350"
                    height="350"
                  />
                </figure>
                <figure className="col-sm-3">
                  <a href="https://jamjon94.github.io/Weather-Dashboard-App/">Weather Dashboard</a>
                  <br/>
                  <a href="https://github.com/jamjon94/Weather-Dashboard-App">GitHub Link</a>
                  <br/>
                  <img
                    className="img img-thumbnail"
                    src={Weather}
                    alt="Weather Dashboard App"
                    width="350"
                    height="350"
                  />
                </figure>
                <ul>
                <ol><a href="https://github.com/jamjon94" className="links"><i className="fab fa-github github-icon"></i>GitHub</a></ol>
              <br/>
              <br/>
                <ol><a  href="https://www.linkedin.com/in/jamie-jones14/" className="links"><i className="fab fa-linkedin linkedin-icon"></i>LinkedIn</a></ol>
              <br/>
              <br/>
                <ol><a href="https://docs.google.com/document/d/1B_zoseM3sjPSz4fKnvZ7qGblpKcgmCC2MNMnyEPEW9c/edit?usp=sharing" className="links"><i className="fas fa-file"></i>Resume</a></ol>
              <br/>
              <br/>
                <ol><a href="mailto:jamie.mar.jones14@gmail.com" className="links"><i className="fas fa-envelope-open-text"></i>email</a></ol>
                </ul>
            </section>

        </main>
    );
};

export default Portfolio;