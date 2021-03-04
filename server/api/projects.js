const router = require("express").Router();
const { Project, Client } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll({
      include: [Client],
    });
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.get("/:projectId", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    res.json(project);
    console.log("Project Route", project);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const [client, created] = await Client.findOrCreate({
      where: {
        clientName: req.body.clientName,
      },
    });
    const project = await Project.create(req.body);

    project.setClient(client);

    res.json(project);
  } catch (error) {
    next(error);
  }
});

router.put("/:projectId", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    await project.update(req.body);
    res.json(project);
  } catch (error) {
    next(error);
  }
});

router.delete("/:projectId", async (req, res, next) => {
  try {
    await Project.destroy({
      where: {
        id: req.params.projectId,
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});
module.exports = router;
