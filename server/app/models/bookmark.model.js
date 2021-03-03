module.exports = (sequelize, Sequelize) => {
  const Bookmark = sequelize.define("bookmark", {
    name: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    group: {
      type: Sequelize.STRING
    }
  });

  return Bookmark;
};
