const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photos extends Model {
    static associate({ Product }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  Photos.init(
    {
      link: DataTypes.TEXT,
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Photos',
    },
  );
  return Photos;
};
