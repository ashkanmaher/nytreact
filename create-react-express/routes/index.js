const articleRoutes = require("./articles");

const router = require("express").Router();

router.use("/articles", articleRoutes);

module.exports = router;
