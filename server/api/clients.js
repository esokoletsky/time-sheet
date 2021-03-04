const router = require("express").Router();
const { Client, Project } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const clients = await Client.findAll({
      include: [Project],
    });
    res.json(clients);
  } catch (error) {
    next(error);
  }
});

router.get("/:clientId", async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.clientId, {
      include: [Project],
    });
    res.json(client);
  } catch (error) {
    next(error);
  }
});

router.get("/:clientId/projects", async (req, res, next) => {
  try {
    const projects = await Project.findAll({
      where: {
        clientId: req.params.clientId,
      },
      include: [Client],
    });
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const client = await Client.create(req.body);
    res.json(client);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
