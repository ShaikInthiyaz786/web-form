const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Address', {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};