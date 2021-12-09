"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Campaign.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      Campaign.hasMany(models.CampaignOrder, { as: "campaignOrders" });
    }
  }
  Campaign.init(
    {
      userId: DataTypes.INTEGER,
      amount: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
        },
      },
      isPaid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
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
      modelName: "Campaign",
      tableName: "campaigns",
      underscored: true,
    }
  );

  Campaign.getColumns = [
    "id",
    "userId",
    "amount",
    "isPaid",
    "options",
    "createdAt",
    "updatedAt",
  ];

  Campaign.filterableColumns = [
    "id",
    "userId",
    "amount",
    "isPaid",
    "options",
    "createdAt",
    "updatedAt",
  ];

  return Campaign;
};
