module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return burger;
};
