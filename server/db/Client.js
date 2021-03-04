const Sequelize = require("sequelize");
const db = require("./db");

const Client = db.define("clients", {
  clientName: {
    type: Sequelize.STRING,
  },
});

module.exports = Client;
