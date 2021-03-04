const router = require("express").Router();

router.use("/projects", require("./projects"));
router.use("/clients", require("./clients"));

module.exports = router;
