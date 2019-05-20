'use strict';

module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Person.associate = (models) => {
    // TODO Add associations.
    Person.hasMany(models.Movie, {
        as: 'director',
        foreignKey: {
          fieldName: 'directorPersonId',
          allowNull: false
        }
    });
    Person.belongsToMany(models.Movie, {
        as: 'movies',
        through: 'movie_actors',
    });
  };

  return Person;
};
