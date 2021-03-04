import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import axios from "axios";
import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SingleClient from "./components/SingleClient";
import SingleProject from "./components/SingleProject";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
    this.addProject = this.addProject.bind(this);
    this.removeProject = this.removeProject.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("/api/projects");
    this.setState({
      projects: res.data,
    });
  }

  addProject(project) {
    this.setState({
      projects: [...this.state.projects, project],
    });
  }

  async removeProject(projectId) {
    await axios.delete(`/api/projects/${projectId}`);
    this.setState({
      projects: this.state.projects.filter(
        (project) => project.id !== projectId
      ),
    });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route
            exact
            path='/'
            render={() => <Form addProject={this.addProject} />}
          />
          <Route
            exact
            path='/projects'
            render={() => (
              <Projects
                projects={this.state.projects}
                removeProject={this.removeProject}
              />
            )}
          />
          <Route path='/projects/:projectId' component={SingleProject} />
          <Route exact path='/clients' component={Clients} />
          <Route path='/clients/:clientId' component={SingleClient} />
        </div>
      </Router>
    );
  }
}

export default App;
