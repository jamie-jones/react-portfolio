import React from 'react';
import "./Portfolio.css"

function Portfolio() {
    return (
        <>
        <main className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <article className="jumbotron background">
                <h1 className="display-4">Portfolio</h1>
                <hr className="my-4" />
                <section className="row">
                  <figure className="col-sm-6">
                    <a target="_blank" href="https://jadavianett.github.io/project-1/">COUCHELLA</a>
                    <a target="_blank" href="https://github.com/jadavianett/project-1/projects/1">GitHub Link</a>
                    <img
                      className="img img-thumbnail"
                      src="./assets/COUCHELLA.png"
                      alt="COUCHELLA"
                      width="350"
                      height="350"
                    />
                  </figure>
                  <figure className="col-sm-6">
                    <a target="_blank" href="https://jamjon94.github.io/Javascript-Quiz/">JavaScript Quiz</a>
                    <a target="_blank" href="https://github.com/jamjon94/Javascript-Quiz">GitHub Link</a>
                    <img
                      className="img img-thumbnail"
                      src="./assets/JavaScript-Quiz.png"
                      alt="JavaScript Coding Quiz"
                      width="350"
                      height="350"
                    />
                  </figure>
                  <figure className="col-sm-6">
                    <a target="_blank" href="https://jamjon94.github.io/Work-Day-Scheduler/">Work Day Scheduler</a>
                    <a target="_blank" href="https://github.com/jamjon94/Work-Day-Scheduler">GitHub Link</a>
                    <img
                      className="img img-thumbnail"
                      src="./assets/word-day-scheduler.png"
                      alt="Word Day Scheduler"
                      width="350"
                      height="350"
                    />
                  </figure>
                  <figure className="col-sm-6">
                    <a target="_blank" href="https://jamjon94.github.io/Weather-Dashboard-App/">Weather Dashboard</a>
                    <a target="_blank" href="https://github.com/jamjon94/Weather-Dashboard-App">GitHub Link</a>
                    <img
                      className="img img-thumbnail"
                      src="./assets/Weather-Dashboard.png"
                      alt="Weather Dashboard App"
                      width="350"
                      height="350"
                    />
                  </figure>
                  <figure className="col-sm-6">
                    <a target="_blank" href="http://www.just-doc-it.com/">Just Doc It</a>
                    <a target="_blank" href="https://github.com/jamjon94/Just-Doc-It">GitHub Link</a>
                    <img className="img img-thumbnail" src="./assets/just-doc-it.png" alt="Just Doc It App" width="350" height="350"/>
                  </figure>
                  <ul>
                  <ol><a target="_blank" href="https://github.com/jamjon94" className="links"><i className="fab fa-github" style="color: black;"></i>GitHub</a></ol>
                <br/>
                <br/>
                  <ol><a target="_blank" href="https://www.linkedin.com/in/jamie-jones14/" className="links"><i className="fab fa-linkedin" style="color: rgb(0,119,181);"></i>LinkedIn</a></ol>
                <br/>
                <br/>
                  <ol><a target="_blank" href="./assets/Web-Dev-Resume.pdf" className="links"><i className="fas fa-file"></i>Resume</a></ol>
                  </ul>
                </section>
              </article>
            </div>
            {/* <div className="card bg-light mb-3" style="max-width: 25rem">
              <h4 className="card-header">Links</h4>
              <div className="card-body">
                    <a href="https://github.com/jamjon94" className="links"><i className="fab fa-github" style="color: black;"></i>GitHub</a>
                  <br/>
                  <br/>
                    <a href="https://www.linkedin.com/in/jamie-jones14/" className="links"><i className="fab fa-linkedin" style="color: rgb(0,119,181);"></i>LinkedIn</a>
                  <br/>
                  <br/>
                    <a href="./assets/Resume.pdf" className="links"><i className="fas fa-file" style="color: white;"></i>Resume</a>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      </>
    );
};

export default Portfolio;