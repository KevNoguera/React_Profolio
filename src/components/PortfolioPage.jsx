import React from 'react';
import Project from './project';
import '../style/PortfolioPage.css';
import ReadmeGenerator from '../assets/ReadmeGenerator.png';
import WeatherDashboard from '../assets/WeatherDashboard.png';
import EmployeeTracker from '../assets/EmployeeTracker.png';
import VehicleBuilder from '../assets/VehicleBuilder.jpg';
import portfolio from '../assets/portfolio.png';
import Project1 from '../assets/Project1.png';

const projectData = [
  {
    title: 'Readme Generator',
    image: ReadmeGenerator,
     //deployedLink: 'https://example.com/project6',
    githubLink: 'https://github.com/KevNoguera/README_Generator',
  },
  {
    title: 'Weather Dashboard',
    image:WeatherDashboard ,
     //deployedLink: 'https://example.com/project6',
    githubLink: 'https://github.com/KevNoguera/Weather_Dashboard',
  },
  {
    title: 'Employee Tracker',
    image: EmployeeTracker,
     //deployedLink: 'https://example.com/project6',
    githubLink: 'https://github.com/KevNoguera/Employee_Tracker',
  },
  {
    title: 'Vehicle Builder',
    image: VehicleBuilder, 
    //deployedLink: 'https://example.com/project6',
    githubLink: 'https://github.com/KevNoguera/Vehicle_builder',
  },
  {
    title: 'Portfolio',
    image: portfolio,
     //deployedLink: 'https://example.com/project6',
    githubLink: 'https://github.com/KevNoguera/Portfolio',
  },
  {
    title: 'Project 1',
    image: Project1,
    deployedLink: 'https://pink727.github.io/Golden_games_repo/',
    githubLink: 'https://github.com/Pink727/Golden_games_repo',
  },
];

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="flex-container">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
