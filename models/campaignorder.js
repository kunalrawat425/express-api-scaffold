"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CampaignOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CampaignOrder.belongsTo(models.Campaign, {
        foreignKey: "campaignId",
        as: "campaign",
      });

      CampaignOrder.belongsTo(models.Service, {
        foreignKey: "serviceId",
        as: "service",
      });
    }
  }
  CampaignOrder.init(
    {
      // id: DataTypes.INTEGER,
      campaignId: { type: DataTypes.INTEGER, allowNull: false },
      serviceId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: { type: DataTypes.INTEGER, defaultValue: 1 },
      options: {
        type: DataTypes.TEXT,
        allowNull: false,
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
      modelName: "CampaignOrder",
      tableName: "campaign_orders",
      underscored: true,
    }
  );

  CampaignOrder.getColumns = [
    "id",
    "campaignId",
    "serviceId",
    "quantity",
    "status",
    "options",
    "createdAt",
    "updatedAt",
  ];

  CampaignOrder.filterableColumns = [
    "id",
    "campaignId",
    "serviceId",
    "quantity",
    "status",
    "options",
    "createdAt",
    "updatedAt",
  ];
  return CampaignOrder;
};
