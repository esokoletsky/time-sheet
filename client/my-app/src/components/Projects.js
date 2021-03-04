import React from "react";

const Projects = ({ projects, removeProject }) => {
  return (
    <div className='projectsContainer'>
      {projects.map((project) => (
        <div key={project.id} className='project'>
          <p>Project Name: {project.projectName}</p>
          <p>Total Hours: {project.hours}</p>
          <p>Total Amount: ${project.amount}</p>
          <p>Client Name: {project.client.clientName}</p>
          <div className='remove-button'>
            <button onClick={() => removeProject(project.id)}>remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
