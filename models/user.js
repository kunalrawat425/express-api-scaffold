"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasOne(models.Role, {
        foreignKey: "user_id",
        as: "role",
      });
    }
  }
  User.init(
    {
      role_id: DataTypes.INTEGER,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [4, 25] } 
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [4, 256] }
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
      // defaultScope: {
      //   attributes: { exclude: ["password"] },
      // },
    }
  );
  return User;
};
