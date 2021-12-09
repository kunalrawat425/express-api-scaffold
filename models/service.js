"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Service.belongsTo(models.Vendor, {
        foreignKey: "vendorId",
        as: "vendor",
      });
      Service.belongsTo(models.Platform, {
        foreignKey: "platformId",
        as: "platform",
      });
      Service.belongsTo(models.ServiceType, {
        foreignKey: "serviceTypeId",
        as: "serviceType",
      });
    }
  }
  Service.init(
    {
      // id: DataTypes.INTEGER,
      name: { type: DataTypes.STRING, allowNull: false },
      vendorId: { type: DataTypes.INTEGER, allowNull: false },
      vendorServiceId: { type: DataTypes.INTEGER, allowNull: false },
      platformId: { type: DataTypes.INTEGER, allowNull: false },
      serviceTypeId: { type: DataTypes.INTEGER, allowNull: false },
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
      modelName: "Service",
      tableName: "services",
      underscored: true,
    }
  );

  Service.attributes = [
    "id",
    "name",
    "vendorId",
    "vendorServiceId",
    "platformId",
    "serviceTypeId",
    "options",
    "isEnabled",
    "createdAt",
    "updatedAt",
  ];

  Service.filterableColumns = [
    "id",
    "name",
    "vendorId",
    "vendorServiceId",
    "platformId",
    "serviceTypeId",
    "options",
    "isEnabled",
    "createdAt",
    "updatedAt",
  ];
  return Service;
};
