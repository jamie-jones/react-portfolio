import React from 'react';
import Couchella from "./assets/COUCHELLA.png";
import JustDocIt from "./assets/just-doc-it.png";

function Portfolio() {
    return (
  <main className="content">
      <h1 className="display-4">Portfolio</h1>
      <hr className="my-4" />
                <section className="row">
                <figure className="col-sm-6">
                <a target="_blank" href="https://jadavianett.github.io/project-1/">COUCHELLA</a>
                <a target="_blank" href="https://github.com/jadavianett/project-1/projects/1">GitHub Link</a>
                <img
                      className="img img-thumbnail"
                      src={Couchella}
                      alt="COUCHELLA"
                      width="350"
                      height="350"
                    />
                </figure>
                <figure className="col-sm-6">
                <a target="_blank" href="http://www.just-doc-it.com/">Just Doc It</a>
                    <a target="_blank" href="https://github.com/jamjon94/Just-Doc-It">GitHub Link</a>
                    <img 
                    className="img img-thumbnail"
                    src={JustDocIt}
                    alt="Just Doc It App"
                    width="350"
                    height="350"/>
                </figure>
                </section>
  </main>
    );
};

export default Portfolio;