"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserPromocode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      UserPromocode.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      UserPromocode.belongsTo(models.Promocode, {
        foreignKey: "promocodeId",
        as: "promocode",
      });
    }
  }
  UserPromocode.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      PromocodeId: { type: DataTypes.INTEGER, allowNull: false },
      createdAt: {
        type: DataTypes.DATE,
        get: function () {
          return require("moment")(this.getDataValue("createdAt")).format(
            "MMM DD,YYYY"
          );
        },
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        get: function () {
          return require("moment")(this.getDataValue("createdAt")).format(
            "MMM DD,YYYY"
          );
        },
        defaultValue: DataTypes.NOW,
      },
      deletedAt: {
        type: DataTypes.DATE,
        get: function () {
          return require("moment")(this.getDataValue("createdAt")).format(
            "MMM DD,YYYY"
          );
        },
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "UserPromocode",
      tableName: "user_promocodes",
      underscored: true,
    }
  );
  return UserPromocode;
};
