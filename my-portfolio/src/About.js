import React from 'react';
import najahImage from './najah.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img src={najahImage} alt="Najah" className="profile-pic"/>
      </div>
      <div className="about-content">
        <h1>Hi I'm Najah,</h1>
        <p>A Full-Stack Developer skilled in HTML, CSS, JavaScript, React, Node.js, and SQL. 
          Trained at CodeYourFuture, I've built projects like HireMe. I'm always eager to 
          tackle new challenges and learn new things.</p>
      </div>
    </section>
  );
}
export default About;
