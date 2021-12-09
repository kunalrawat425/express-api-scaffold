"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      Payment.belongsTo(models.Campaign, {
        foreignKey: "campaignId",
        as: "campaign",
      });
    }
  }
  Payment.init(
    {
      // id: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      campaignId: { type: DataTypes.INTEGER, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.INTEGER, allowNull: false },
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
      modelName: "Payment",
      tableName: "payments",
      underscored: true,
    }
  );

  Payment.attributes = [
    "id",
    "user_id",
    "campaignId",
    "type",
    "description",
    "amount",
    "options",
    "createdAt",
    "updatedAt",
  ];

  Payment.filterableColumns = [
    "id",
    "user_id",
    "campaignId",
    "type",
    "description",
    "amount",
    "options",
    "createdAt",
    "updatedAt",
  ];

  return Payment;
};
