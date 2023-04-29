import React from "react";
import "./certificates.css";
import CSS from "../../assets/css.jpg";
import Internship from "../../assets/intrnship.jpg"; 
import CID from "../../assets/CID internship.jpg"; 
import C from "../../assets/C programming.jpg";
import Html5 from "../../assets/html5.jpg";
import WebD from "../../assets/htmlcssjs.jpg";
import Java from "../../assets/java.jpg";
import JavaScript from "../../assets/javascript.jpg";
import ReactC from "../../assets/react.jpg";




const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">My Certificates</span>
      <div className="certificates-container">
        <div className="certificate">
          <img src={Internship} alt="Certificate" />
          <h3>Full Stack Intern</h3>
          <p>AppSquadz Soft.Pvt.Ltd</p>
          <p>June 2022 - Dec 2022</p>
        </div>
        <div className="certificate">
          <img src={CID} alt="Certificate" />
          <h3>CID Crime Branch</h3>
          <p>Crime Branch Jaipur | Rajasthan</p>
          <p>Jan 2023 - Feb 2023</p>
        </div>
        <div className="certificate">
          <img src={C} alt="Certificate" />
          <h3>C/C++ programming</h3>
          <p>Samyak Computer Classes</p>
          <p>March 2022</p>
        </div>
        <div className="certificate">
          <img src={Java} alt="Certificate" />
          <h3>JCore ava</h3>
          <p>HackerRank</p>
          <p>April 2023</p>
        </div>
        <div className="certificate">
          <img src={Html5} alt="Certificate" />
          <h3>Introduction to HTML5</h3>
          <p>Coursera</p>
          <p>Sep 2021</p>
        </div>
        <div className="certificate">
          <img src={WebD} alt="Certificate" />
          <h3>HTML,CSS & JavaScript</h3>
          <p>Coursera</p>
          <p>Feb 2022</p>
        </div>
        <div className="certificate">
          <img src={CSS} alt="Certificate" />
          <h3>CSS</h3>
          <p>HackerRank</p>
          <p>April 2023</p>
        </div>
        <div className="certificate">
          <img src={JavaScript} alt="Certificate" />
          <h3>JavaScript Basic</h3>
          <p>HackerRank</p>
          <p>April 2023</p>
        </div>
        <div className="certificate">
          <img src={ReactC} alt="Certificate" />
          <h3>React Basic</h3>
          <p>HackerRank</p>
          <p>April 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
