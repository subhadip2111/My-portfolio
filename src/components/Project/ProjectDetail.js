// ProjectDetail.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProjectsData from "./ProjectData"; // Your project data
import "./projectDetails.css"
const ProjectDetail = () => {
  const { projectId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const project = ProjectsData.find(
    (project) => project.id === parseInt(projectId)
  );

  if (!project) {
    return <div>Project not found.</div>;
  }

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

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
          <div
            className="project-image-card"
            key={index}
            onClick={() => openModal(image)}
          >
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

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close-button">&times;</span>
          <img
            src={selectedImage}
            alt="Zoomed Imag"
            className="modal-content"
          />
        </div>
      )}
    </div>
  );
};
export default ProjectDetail;