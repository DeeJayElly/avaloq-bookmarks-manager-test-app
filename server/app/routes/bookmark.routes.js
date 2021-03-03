module.exports = app => {
  const bookmarks = require("../controllers/bookmark.controller.js");

  var router = require("express").Router();

  // Create a new Bookmark
  router.post("/", bookmarks.create);

  // Retrieve all Bookmarks
  router.get("/", bookmarks.findAll);

  // Retrieve all published Bookmarks
  router.get("/published", bookmarks.findAllPublished);

  // Retrieve a single Bookmark with id
  router.get("/:id", bookmarks.findOne);

  // Update a Bookmark with id
  router.put("/:id", bookmarks.update);

  // Delete a Bookmark with id
  router.delete("/:id", bookmarks.delete);

  // Delete all Bookmarks
  router.delete("/", bookmarks.deleteAll);

  app.use('/api/bookmarks', router);
};
