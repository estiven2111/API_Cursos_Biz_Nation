
const Leccion = require("../models/Lesson")

const CreateLesson = async(req) => {
  
    const { titulo, descripcion, video } =
    req.body;
   const {id} = req.params
  try {
    if (!id) return { success: false, message: "Debe seleccionar un curso" };
    if (
      titulo === "" ||
      video === "" ||
      descripcion === ""
    )
      return { success: false, message: "Debe llenar todos los campos" };

 console.log(titulo, descripcion,parseInt(id))
    // const searchLesson = await Leccion.findOne({
    //     where: { cursoId: id }
    //   });
    // //? si existe el curso devuelve el error
    // if (searchLesson) {
    //   return { success: false, message: "el curso ya tiene esta leccion", searchLesson };
    // }

    const leson = new Leccion({
      titulo: titulo,
      descripcion: descripcion,
      video:video,
      cursoId: id
    });
    await leson.save();
    const Lessons = await Leccion.findAll();

    return { success: true, message: "Leccion creadada exitosamente", Lessons };
  } catch (error) {
    console.error("Error al seleccionar el CreateLesson:", error);
    return { success: false, message: "error de servidor" };
  }
}

module.exports = { CreateLesson }