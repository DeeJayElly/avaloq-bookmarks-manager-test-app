const db = require("../models");
const Bookmark = db.bookmarks;
const Op = db.Sequelize.Op;

// Create and Save a new Bookmark
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Bookmark
  const bookmark = {
    name: req.body.name,
    url: req.body.url,
    group: req.body.group,
  };

  // Save Bookmark in the database
  Bookmark.create(bookmark)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bookmark."
      });
    });
};

// Retrieve all Bookmarks from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? {name: {[Op.like]: `%${name}%`}} : null;

  Bookmark.findAll({where: condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookmarks."
      });
    });
};

// Find a single Bookmark with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Bookmark.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Bookmark with id=" + id
      });
    });
};

// Update a Bookmark by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Bookmark.update(req.body, {
    where: {id: id}
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: "Bookmark was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Bookmark with id=${id}. Maybe Bookmark was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bookmark with id=" + id
      });
    });
};

// Delete a Bookmark with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Bookmark.destroy({
    where: {id: id}
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: "Bookmark was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Bookmark with id=${id}. Maybe Bookmark was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bookmark with id=" + id
      });
    });
};

// Delete all Bookmarks from the database.
exports.deleteAll = (req, res) => {
  Bookmark.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({message: `${nums} Bookmarks were deleted successfully!`});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all bookmarks."
      });
    });
};

// find all published Bookmark
exports.findAllPublished = (req, res) => {
  Bookmark.findAll({where: {published: true}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookmarks."
      });
    });
};
