import React from "react";
import "./skill.css";

//import webdeveloper from "../../assets/website-design.png"
const Skill = () => {
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
    </section>
  );
};

export default Skill;
