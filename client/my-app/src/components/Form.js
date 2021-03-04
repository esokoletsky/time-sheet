import React, { Component } from "react";
import axios from "axios";
import "../../src/index.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      hours: "",
      amount: "",
      clientName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  async handleSubmit(event) {
    //event.preventDefault();
    const res = await axios.post("/api/projects", this.state);
    console.log("Hit handleSubmit", res.data);
    this.props.addProject(res.data);

    this.setState({
      projectName: "",
      hours: "",
      amount: "",
      clientName: "",
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>ADD PROJECT</legend>
          <label htmlFor='projectName'>Project Name:</label>
          <input
            type='text'
            name='projectName'
            value={this.state.projectName}
            onChange={this.handleChange}
          />
          <label htmlFor='hours'>Total Hours:</label>
          <input
            type='text'
            name='hours'
            value={this.state.hours}
            onChange={this.handleChange}
          />
          <label htmlFor='amount'>Total Amount</label>
          <input
            type='text'
            name='amount'
            value={this.state.amount}
            onChange={this.handleChange}
          />

          <label htmlFor='clientName'>Client Name:</label>
          <input
            type='text'
            name='clientName'
            value={this.state.clientName}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
