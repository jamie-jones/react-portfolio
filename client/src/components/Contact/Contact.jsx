import React from 'react';
import "./Contact.css";

function Contact() {
    return (
    <main className="content">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <article className="jumbotron background">
              <h1 className="display-4">Contact</h1>
              <hr className="my-4" />
              <section className="row">
                <section className="col-sm-10">
                  <form>
                    <section className="form-row">
                      <div className="col-sm-12">
                        <label for="validationDefault01" id="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationDefault01"
                          value="Name"
                          required
                        />
                      </div>
                    </section>
                    <div className="form-group">
                      <label for="exampleInputEmail1" id="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label for="exampleFormControlTextarea1" id="message"
                        >Message</label
                      >
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" id="button">
                      Submit
                    </button>
                  </form>
                </section>
              </section>
            </article>
          </div>
        </div>
      </div>
    </main>
    );
};

export default Contact;