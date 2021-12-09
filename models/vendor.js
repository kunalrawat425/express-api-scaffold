"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.Service, { as: "services" });
    }
  }
  Vendor.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [4, 256] },
      },
      options: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isEnabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
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
      modelName: "Vendor",
      tableName: "vendors",
      underscored: true,
    }
  );
  Vendor.getColumns = [
    "id",
    "name",
    "options",
    "isEnabled",
    "createdAt",
    "updatedAt",
  ];
  
  Vendor.filterableColumns = [
    "id",
    "name",
    "options",
    "isEnabled",
    "createdAt",
    "updatedAt",
  ];
  return Vendor;
};
