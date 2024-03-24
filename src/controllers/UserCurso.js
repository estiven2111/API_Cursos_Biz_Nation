const Usuario = require("../models/User");
const Cursos = require("../models/Curso");

//? Agregar un curso a un usuario
const CreateCursoUser = async (req) => {
  try {
    const { usuarioId, cursoId } = req.body;
    console.log(usuarioId, cursoId);
    const usuario = await Usuario.findByPk(usuarioId);
    const curso = await Cursos.findByPk(cursoId);
    let msg = "";
    if (!usuario || !curso) {
      return { success: true, message: "Usuario o curso no encontrado" };
    }
    // Verificar si la relación ya existe
    const existeRelacion = await usuario.hasCurso(curso);
    if (existeRelacion) {
      msg = "La relación entre el usuario y el curso ya existe";
    } else {
      // Agregar el curso al usuario
      await usuario.addCurso(curso);
      msg = "agregado al usuario correctamente";
    }

    const cursosDelUsuario = await usuario.getCursos();

    return { success: true, message: msg, cursosDelUsuario };
  } catch (error) {
    console.error("Error al seleccionar el CreateCursoUser:", error);
    return { success: false, message: "error de servidor" };
  }
};

module.exports = { CreateCursoUser };
