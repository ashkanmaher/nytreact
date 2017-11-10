const articlesController = require("../../controllers/articlesController");

const router = require("express").Router();


router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
