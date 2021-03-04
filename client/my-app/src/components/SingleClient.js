import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SingleClient extends Component {
  constructor() {
    super();
    this.state = {
      client: {
        projects: [],
      },
    };
  }
  async componentDidMount() {
    const clientId = this.props.match.params.clientId;
    const clientPath = `/api/clients/${clientId}`;
    const responses = await Promise.all([
      await axios.get(clientPath),
      await axios.get(`${clientPath}/projects`),
    ]);
    const [client, projects] = responses.map((res) => res.data);
    client.projects = projects;
    this.setState({
      client,
    });
  }
  render() {
    const client = this.state.client;
    return (
      <div className='single-client-container'>
        <p>Client: {client.clientName}</p>
        <p>Projects:</p>
        {client.projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <li>{project.projectName}</li>
          </Link>
        ))}
      </div>
    );
  }
}

export default SingleClient;
