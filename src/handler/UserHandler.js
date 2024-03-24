const {  ControllerUser } = require("../controllers");

const getUser = async (req, res) => {
  try {
    const result = await ControllerUser.infoUser(req);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
    try {
      const result = await ControllerUser.infoUsers(req);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
module.exports = {
    getUser,
    getUsers,
};
