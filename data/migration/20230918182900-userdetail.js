"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "userdetail",
      {
        userId: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userEmail: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        password: Sequelize.STRING,
        address: Sequelize.STRING,
      },
      {
        timestamps: false,
        schema: "public",
        freezeTableName: true,
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("userdetail");
  },
};
