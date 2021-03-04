import React, { Component } from "react";
import axios from "axios";
import UpdateForm from "./UpdateForm";

class SingleProject extends Component {
  constructor() {
    super();
    this.state = {
      project: {},
    };
    this.updateProject = this.updateProject.bind(this);
  }

  async componentDidMount() {
    const projectId = this.props.match.params.projectId;
    const res = await axios.get(`/api/projects/${projectId}`);
    const project = res.data;
    this.setState({ project });
  }

  updateProject(project) {
    this.setState({
      project,
    });
  }

  render() {
    const project = this.state.project;
    return (
      <div>
        <div className='projectsContainer'>
          <div key={project.id} className='project'>
            <p>Project Name: {project.projectName}</p>
            <p>Total Hours: {project.hours}</p>
            <p>Total Amount: ${project.amount}</p>
          </div>
        </div>
        {this.state.project.id && (
          <UpdateForm project={project} updateProject={this.updateProject} />
        )}
      </div>
    );
  }
}

export default SingleProject;
