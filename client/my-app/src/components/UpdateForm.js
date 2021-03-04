import React, { Component } from "react";
import axios from "axios";
class UpdateForm extends Component {
  constructor() {
    super();
    this.state = {
      projectName: "",
      hours: "",
      amount: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      projectName: this.props.project.projectName,
      hours: this.props.project.hours,
      amount: this.props.project.amount,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      const id = this.props.project.id;
      const res = await axios.put(`/api/projects/${id}`, this.state);
      this.props.updateProject(res.data);
      this.setState({
        projectName: "",
        hours: "",
        amount: "",
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className='update-container'>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>UPDATE PROJECT INFO</legend>
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

            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
