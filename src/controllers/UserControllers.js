const Usuario = require("../models/User");

const infoUser = async (req) => {
  try {
    const { user_id } = req.user;
    const user = await Usuario.findByPk(user_id, {
      attributes: { exclude: ["password"] },
    });
    return { success: true,message:"usuario con el id correcto", user };
  } catch (error) {
    console.error("Error al seleccionar el infoUsers:", error);
    return { success: false, message: "error de servidor" };
  }
};

const infoUsers = async (req) => {
  try {
    const users = await Usuario.findAll({
      attributes: { exclude: ["password"] },
    });
    if (users.length <= 0) return "No hay usuarios en la base de datos";
    return { success: true,message:"Todos los usuarios", users };
  } catch (error) {
    console.error("Error al seleccionar el infoUsers:", error);
    return { success: false, message: "error de servidor" };
  }
};

module.exports = {
  infoUser,
  infoUsers,
};
