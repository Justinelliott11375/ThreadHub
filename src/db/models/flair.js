'use strict';
module.exports = (sequelize, DataTypes) => {
  var Flair = sequelize.define('Flair', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Flair.associate = function(models) {
    // associations can be defined here

    Flair.belongsTo(models.Topic, {
      foreignKey: "topicId",
      onDelete: "CASCADE"
    }),
    Flair.belongsTo(models.Post, {
      foreignKey: "postId",
      onDelete: "CASCADE"
    });
  };
  return Flair;
};