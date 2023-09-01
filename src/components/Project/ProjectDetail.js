// ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import ProjectsData from "./ProjectData"; // Your project data
import "./projectDetails.css"
const ProjectDetail = () => {
    const { projectId } = useParams();
    
    console.log(projectId);
  const project = ProjectsData.find(
    (project) => project.id === parseInt(projectId)
  );

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail-container">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className="project-links">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          Demo Link
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          GitHub Link
        </a>
      </div>
      <h3>Images</h3>
      <div className="project-images">
        {project.images.map((image, index) => (
          <div className="project-image-card" key={index}>
            <img src={image} alt={`Screenshot ${index + 1}`} />
          </div>
        ))}
      </div>
      <h3>Video</h3>
      <div className="project-video">
        <video controls>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ProjectDetail;
