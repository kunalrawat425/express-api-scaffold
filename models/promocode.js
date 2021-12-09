"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Promocode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Promocode.hasMany(models.UserPromocode, { as: "userPromocodes" });
    }
  }
  Promocode.init(
    {
      // id: DataTypes.INTEGER,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [4, 256] },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [4] },
      },
      options: { type: DataTypes.STRING, allowNull: false },
      isEnabled: { type: DataTypes.BOOLEAN, allowNull: false },
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
          return require("moment")(this.getDataValue("updatedAt")).format(
            "MMM DD,YYYY"
          );
        },
      },
      deletedAt: {
        type: DataTypes.DATE,
        get: function () {
          return require("moment")(this.getDataValue("deletedAt")).format(
            "MMM DD,YYYY"
          );
        },
      },
    },
    {
      sequelize,
      modelName: "Promocode",
      tableName: "promocode",
      underscored: true,
    }
  );

  Promocode.attributes = [
    "id",
    "name",
    "description",
    "options",
    "isEnabled",
    "createdAt",
    "updatedAt",
  ];

  Promocode.filterableColumns = [
    "id",
    "name",
    "description",
    "options",
    "isEnabled",
    "createdAt",
    "updatedAt",
  ];
  return Promocode;
};
