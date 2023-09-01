// Project.js
import React from "react";
import { Link } from "react-router-dom";
import ProjectsData from "./ProjectData";
import "./project.css";

const Project = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <ul className="project-list">
        {ProjectsData.map((project) => (
          <li key={project.id}>
            {/* Increase the image size by adjusting max-width */}
            <img
              src={project.images[0]}
              alt={project.name}
              className="project-image"
            />
            <h3>{project.name}</h3>
            {/* Link to the project detail page */}
            <Link to={`/project/${project.id}`} className="see-project-link">
              See Project
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
