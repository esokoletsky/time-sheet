import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Clients extends Component {
  constructor() {
    super();

    this.state = {
      clients: [],
    };
  }
  async componentDidMount() {
    const res = await axios.get("/api/clients");
    const clients = res.data;
    this.setState({
      clients,
    });
  }
  render() {
    const clients = this.state.clients;

    return (
      <div className='clientsContainer'>
        {clients.map((client) =>
          client.projects.length < 1 ? (
            ""
          ) : (
            <div className='clientList' key={client.id}>
              <Link to={`/clients/${client.id}`}>{client.clientName}</Link>
            </div>
          )
        )}
      </div>
    );
  }
}

export default Clients;
