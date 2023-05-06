const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Point.init({
    user_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};
