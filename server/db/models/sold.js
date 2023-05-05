const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sold extends Model {
    static associate({ Product, User }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Sold.init(
    {
      product_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Sold',
    },
  );
  return Sold;
};
