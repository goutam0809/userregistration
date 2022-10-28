const models = require("../../data/model/index");
const { Op } = require("sequelize");

class UserModel {
  constructor() {
    this.registerUser = (registerObj, cb) => {
      models.userdetail
        .create(registerObj)
        .then((data) => cb(true, "User Registration Successful"))
        .catch((err) => {
          cb(false, `${err}`);
        });
    };
  }
}

module.exports = UserModel;
