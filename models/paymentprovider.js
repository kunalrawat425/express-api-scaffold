"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentProvider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentProvider.init(
    {
      // id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      options: DataTypes.JSON,
      is_production: DataTypes.BOOLEAN,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "PaymentProvider",
      tableName: "paymentprovider",
      underscored: true,
    }
  );


  return PaymentProvider;
};
