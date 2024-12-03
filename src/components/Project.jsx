import React from 'react';
import '../style/PortfolioPage.css';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="flex-item">
    <img src={image} alt={`${title} screenshot`} className="project-image" />
    <div className="overlay">
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' }}>
        GitHub Repo
      </a>
    </div>
  </div>
);
}

export default Project;
