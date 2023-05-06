const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Product, Favorite, Sold, Point }) {
      this.hasMany(Product, { foreignKey: 'user_id' });
      this.hasMany(Favorite, { foreignKey: 'user_id' });
      this.hasMany(Sold, { foreignKey: 'user_id' });
      this.hasMany(Point, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      photo: DataTypes.TEXT,
      age: DataTypes.INTEGER,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      about: DataTypes.TEXT,
      number: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
