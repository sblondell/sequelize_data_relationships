'use strict';

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Movie.associate = (models) => {
    // TODO Add associations.
    Movie.belongsTo(models.Person, { 
        as: 'director',
        foreignKey: {
          fieldName: 'directorPersonId',
          allowNull: false 
        }
    });
    Movie.belongsToMany(models.Person, { 
        as: 'actors',
        through: 'movie_actors',
    });
  };

  return Movie;
};
