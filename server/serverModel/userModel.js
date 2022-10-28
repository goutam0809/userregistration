const models = require("../../data/model/index");
const { Op } = require("sequelize");
const { loginuser } = require("../serverController/userController");

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

    this.loginuser = (loginObj, cb) => {
      models.userdetail
        .findAll({
          where: { userEmail: loginObj.userEmail, password: loginObj.password },
        })
        .then((data) => {
          console.log(data);
          if (data.length > 0) {
            cb(true, "User Login Successful");
          } else {
            cb(false, "Please enter valid user crendentials");
          }
        })
        .catch((err) => {
          cb(false, `${err}`);
        });
    };
  }
}

module.exports = loginuser;
module.exports = UserModel;
