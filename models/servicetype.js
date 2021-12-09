"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ServiceType.hasMany(models.Service, { as: "service" });
      ServiceType.belongsTo(models.Platform, {
        foreignKey: "platformId",
        as: "platform",
      });
    }
  }
  ServiceType.init(
    {
      // id: DataTypes.INTEGER,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [4, 256] },
      },
      platformId: { type: DataTypes.INTEGER, allowNull: false },
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
      modelName: "ServiceType",
      tableName: "service_types",
      underscored: true,
    }
  );
  return ServiceType;
};
