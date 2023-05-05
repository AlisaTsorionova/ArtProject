const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Category, User, Favorite, Photo, Sold }) {
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Favorite, { foreignKey: 'product_id' });
      this.hasMany(Photo, { foreignKey: 'product_id' });
      this.hasMany(Sold, { foreignKey: 'product_id' });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
