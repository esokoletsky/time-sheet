const Sequelize = require("sequelize");
const db = require("./db");

const Project = db.define("projects", {
  projectName: {
    type: Sequelize.STRING,
  },
  hours: {
    type: Sequelize.STRING,
  },
  amount: {
    type: Sequelize.STRING,
  },
});

module.exports = Project;
