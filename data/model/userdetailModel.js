module.exports = (sequelize, Datatypes) => {
  const userdetail = sequelize.define(
    "userdetail",
    {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER,
      },
      name: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      userEmail: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      userPassword: Datatypes.STRING,
      userAddress: Datatypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  userdetail.associates = function (models) {};
  return userdetail;
};
