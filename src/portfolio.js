import React from "react";
import "./portfolio.css";
const Portfolio = () => (
  <div className="portfolio">
    <div className="header">
      <h1>Pantangi Bhavya Rushitha</h1>

      <h2>Student at VIT AP</h2>

      <div className="contact-info">
        <h3>
          <a href="mailto:bhavyapantangi@gmail.com">bhavyapantangi@gmail.com</a>
        </h3>

        <h3>9398400433</h3>
      </div>
    </div>

    <div className="about">
      <h2>About</h2>

      <p className="enlarge">
        I am a student at VIT-AP University
        <br />
        Born on 4th February 2004
        <br />
        I am studying Computer Science of Engineering(Data Science)
        <br />
        My registration number is 21BCE9273
      </p>
    </div>

    <div className="education">
      <h2>Education</h2>

      <div className="education-item">
        <h2>
          Viswabharathi English Medium High School ,Gudivada,Andhra
          Pradesh,India
        </h2>

        <p>10th class 10.0 GPA</p>
      </div>

      <div className="education-item">
        <h2>Srichaitanya Junior College,Narsaraopeta,AndhraPradesh,India</h2>

        <p>Intermediate 92%</p>
      </div>
      <div className="education-item">
        <h2>VIT-AP</h2>
        <p>I am a third year student of Computer Science</p>
      </div>
    </div>
    <div className="skills">
      <h2>Skills</h2>

      <div className="talent">
        <h2>Java</h2>

        <p>Core and Advanced java specialist</p>
      </div>

      <div className="talent">
        <h2>JavaScript</h2>

        <p>
          Can create complex web application front end scripting using
          JavaScript
        </p>
      </div>

      <div className="talent">
        <h2>HTML</h2>

        <p>Strong in writing HTML for UI design</p>

        <br></br>

        <br></br>
      </div>
    </div>

    <div className="interests">
      <h2>Interests and Hobbies</h2>

      <ul className="talent">
        <li>Reading Books</li>

        <li>Playing Chess</li>
      </ul>

      <ul className="talent">
        <li>Coding</li>

        <li>Watching Movies</li>
      </ul>
    </div>
    <br></br>

    <br></br>

    <br></br>

    <br></br>

    <div className="footer">
      <p>
        Bhavya Rushitha Pantangi &mdash;{" "}
        <a href="mailto:bhavyapantangi@gmail.com">bhavyapantangi@gmail.com</a>{" "}
        &mdash; 9398400433{" "}
      </p>
    </div>
  </div>
);

export default Portfolio;
