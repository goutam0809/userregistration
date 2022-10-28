let UserModel = require("../serverModel/userModel");

const registerUser = (req, res) => {
  let userModel = new UserModel();
  try {
    let registerObj = req.body;
    userModel.registerUser(registerObj, (status, message) => {
      if (status === true) {
        console.log(message);
        res.json({
          status: 200,
          msg: message,
        });
      } else {
        res.json({
          status: 500,
          msg: message,
        });
      }
    });
  } catch (e) {
    res.json({
      status: 500,
      msg: `Error in user registration method ${e}`,
    });
  }
};

const loginuser = (req, res) => {
  let userModel = new UserModel();
  try {
    let loginObj = req.body;
    console.log(req)
    userModel.loginuser(loginObj, (status, message) => {
      if (status === true) {
        console.log(message);
        res.json({
          status: 200,
          msg: message,
        });
      } else {
        res.json({
          status: 500,
          msg: message,
        });
      }
    });
  } catch (e) {
    res.json({
      status: 500,
      msg: `Error in user login method ${e}`,
    });
  }
};
module.exports = { registerUser,loginuser };
