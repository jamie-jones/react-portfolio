import React from "react";
import Photo from "./assets/about-me.png"
import "./About.css";

function About() {
    return(
    //   <>
     <main className="content">
       <div className="container">
         <div className="row">
           <div className="col-sm-8">
             <article className="jumbotron background">
               <h1 className="display-4">About Me</h1>
               <hr className="my-4" />
               <section className="row">
                 <section className="col-sm-12">
                   <img className="img img-thumbnail" id="float-left" src={Photo} alt="Jamie Jones" width="350" height="350" />
                   <p> 
                     Hi! My name is Jamie Jones! I am new to web development,
                     beginning my career as a student in an online Bootcamp for
                     web development. Before this, I was in the Army for a couple
                     of years until I was medically discharged and returned home
                     to Georgia. For a year, I worked at an animal hospital as a
                     veterinary and kennel technician with the intention of
                     getting experience before going to school to become a
                     veterinarian. It wasn't long before I realized my true
                     desire in life is to travel the world, and from a friend, I
                     heard about web development, which would give me that
                     possibility while I still worked. After research, I decided
                     this was something I would find enjoyable, and I quickly
                     signed up for a three month web development course.
                    </p>
                 </section>
               </section>
               <section className="row">
                 <section className="col-sm-12">
                  <p>
                     I am an animal lover and adopted a three week old kitten,
                     named Ellie, while working at the animal hospital. I also
                     have a 12 year old dog named Chanel. I love horror movies
                     and listening to KPop, as well as playing video games, and
                     reading and writing. I love camping and kayaking and can't
                     wait to travel the world.
                  </p>
                 </section>
                 </section>
             </article>
           </div>
         </div>
       </div>
    </main>
    // </>
    )
}

export default About;