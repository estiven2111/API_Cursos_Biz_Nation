const bscrypt = require("bcryptjs");
const jwt = require("../utils/Jwt");
const Usuario = require("../models/User");
const Email = require("../utils/Email");
const Register = async (req) => {
  try {
    let { nombreCompleto, fechaNacimiento, email, password, rol } = req.body;
    if ((!nombreCompleto || !fechaNacimiento || !email || !password, !rol))
      return { error: "Debe llenar todos los campos" };
    if (rol !== "admin" && rol !== "estudiante")
      return { success: false, message: "El rol debe ser estudiante o admin" };
    //?el nombreCompleto se agrega con mayuscula
    const Nombre = nombreCompleto.toUpperCase();

    //? validacion de correo electronico
    const valueEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!valueEmail.test(email))
      return { success: false, message: "el correo no es correcto" };
    /**
     *?  validacion password del password
     *? - Minimo 8 caracteres
     *? - Maximo 15
     *? - Al menos una letra mayúscula
     *? - Al menos una letra minucula
     *? - Al menos un numero
     *? - No espacios en blanco
     *? - Al menos 1 caracter especial  */
    const valeuPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (!valeuPassword.test(password))
      return { success: false, message: "Contraseña incorrecta" };

    const searchEmail = await Usuario.findOne({
      where: { email: email },
    });
    //? si existe el correo devuelve el error
    if (searchEmail)
      return { success: false, message: "El correo ya esta en uso" };

    const salt = bscrypt.genSaltSync(10);
    const hashPassword = bscrypt.hashSync(password, salt);
    const user = new Usuario({
      nombreCompleto: Nombre,
      fechaNacimiento: fechaNacimiento,
      email: email.toLowerCase(),
      password: hashPassword,
      rol: rol,
    });

    const userSave = await user.save();
    Email.sendEmail(email);
    return { success: true, message: "Registro exitoso", userSave };
  } catch (error) {
    console.error("Error al seleccionar el Register:", error);
    return { success: false, message: "error de servidor" };
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const emailLowerCase = email.toLowerCase();

    const user = await Usuario.findOne({
      where: {
        email: emailLowerCase,
      },
    });
    if (!user) {
      return { success: false, message: "No se encotro el usuario" };
    }

    // Comparar la contraseña proporcionada con el hash almacenado
    const passwordMatch = await bscrypt.compare(password, user.password);
    if (!passwordMatch) {
      return "Contraseña incorrecta";
    }

    return {
      success: true,
      access: jwt.createAccessToken(user),
      refresh: jwt.refreshToken(user),
    };
  } catch (error) {
    console.error("Error al seleccionar el Login:", error);
    return { success: false, message: "error de servidor" };
  }
};

module.exports = { Register, Login };
