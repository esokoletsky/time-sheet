const db = require("./db");
const Project = require("./Project");
const Client = require("./Client");

Client.hasMany(Project);
Project.belongsTo(Client);

module.exports = {
  db,
  Project,
  Client,
};
