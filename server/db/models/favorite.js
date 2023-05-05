const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ Product, User }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Favorite.init(
    {
      product_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favorite',
    },
  );
  return Favorite;
};
