import React from 'react'
import "./works.css"

import portfolio1 from "../../assets/portfolio-1.png"
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";
const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle"> My Portfolio</h2>
      <span className="workDescriptions"></span>
      <div className="workImageContaineN">
        <div className="workImage">
          <img src={portfolio1} alt="portfolio1" className="workImg" />
          <img src={portfolio2} alt="portfolio2" className="workImg" />
          <img src={portfolio3} alt="portfolio3" className="workImg" />
          <img src={portfolio4} alt="portfolio4" className="workImg" />
          <img src={portfolio5} alt="portfolio5" className="workImg" />
          <img src={portfolio6} alt="portfolio6" className="workImg" />
        </div>
      </div>
    </section>
  );
}

export default Works