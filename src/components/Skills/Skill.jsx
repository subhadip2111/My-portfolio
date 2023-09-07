import React from "react";
import "./skill.css";
//import resumePdf from "./resumed.pdf";

const Skill = () => {

  const resumeUrl =
    "https://drive.google.com/file/d/1HAlwnFydUN-OG5Al6PeZve2HzNW84ccR/view?usp=sharing";
  return (
    <section id="skills">
      <h2 className="skillTitle">My Expertise</h2>
      <p className="skillDescription">
        I am a passionate web developer with a strong foundation in a variety of
        modern technologies. Here are some of my skills:
      </p>
      <div className="skillList">
        <p className="skill">
          <i className="icon">⚛️</i> React.js
        </p>
        <p className="skill">
          <i className="icon">⚙️</i> Redux
        </p>
        <p className="skill">
          <i className="icon">🎨</i> Tailwind CSS
        </p>
        <p className="skill">
          <i className="icon">🖌️</i> CSS
        </p>
        <p className="skill">
          <i className="icon">🔥</i> Node.js
        </p>
        <p className="skill">
          <i className="icon">💡</i> JavaScript
        </p>
        <p className="skill">
          <i className="icon">🌐</i> Express
        </p>
        <p className="skill">
          <i className="icon">📂</i> Git
        </p>
        <p className="skill">
          <i className="icon">🧠</i> Problem Solving
        </p>
        <p className="skill">
          <i className="icon">🤖</i> GPT and Chatbots
        </p>
      </div>
      <div className="downloadButton">
        <a href={resumeUrl} download="resumed.pdf" className="resumeLink">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Skill;
