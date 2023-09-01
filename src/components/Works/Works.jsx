import React, { useState } from "react";
import "./works.css";

import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  const allPortfolios = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
  ];
  const itemsPerPage = 6; // Number of items to show per page
  const [visiblePortfolios, setVisiblePortfolios] = useState(
    allPortfolios.slice(0, itemsPerPage)
  );

  const handleSeeMore = () => {
    const nextPage = Math.min(
      visiblePortfolios.length + itemsPerPage,
      allPortfolios.length
    );
    setVisiblePortfolios(allPortfolios.slice(0, nextPage));
  };

  return (
    <section id="works">
      <h2 className="worksTitle"> My Portfolio</h2>
      <span className="workDescriptions"></span>
      <div className="workImageContainer">
        <div className="workImage">
          {visiblePortfolios.map((portfolio, index) => (
            <img
              src={portfolio}
              alt={`portfolio${index + 1}`}
              className="workImg"
              key={index}
            />
          ))}
        </div>
      </div>

      {visiblePortfolios.length < allPortfolios.length && (
        <button className="workButton" onClick={handleSeeMore}>
          See more
        </button>
      )}
    </section>
  );
};

export default Works;
