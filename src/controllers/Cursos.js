const Cursos = require("../models/Curso");
const Leccion = require("../models/Lesson")

//? Creacion de un curso y leccion
const CreateCurso = async (req) => {
  const { logo, titulo, descripcion, fechaPublicacion, videoIntroductorio,tituloles,descripcionles,videoles } =
    req.body;

  try {
    if (
      titulo === "" ||
      logo === "" ||
      descripcion === "" ||
      fechaPublicacion === "" ||
      videoIntroductorio === ""||
      tituloles === ""
    )
      return { success: false, message: "Debe llenar todos los campos" };
    const searchCurso = await Cursos.findOne({
      where: { titulo: titulo },
    });

    //? si existe el curso devuelve el error
    if (searchCurso) {
      return { success: false, message: "el curso ya esta creado", searchCurso };
    }
    const Curso = new Cursos({
      logo,
      titulo,
      descripcion,
      fechaPublicacion,
      videoIntroductorio,
    });
    await Curso.save();

    const leson = new Leccion({
      titulo: tituloles,
      descripcion: descripcionles,
      video:videoles,
      cursoId: Curso.id
    });
    await leson.save();

    const cursoConLecciones = await Cursos.findByPk(Curso.id, { include: 'lecciones' });

    return { success: true, message: "curso creado exitosamente", cursoConLecciones };
  } catch (error) {
    console.error("Error al seleccionar el CreateCurso:", error);
    return { success: false, message: "error de servidor" };
  }
};

//? Envio de todos los cursos disponibles
const sendCursos = async (req) => {
  try {

const {numCursos,pagina} = req.query
const PAGE_SIZE = numCursos; // Número de cursos por página
const currentPage = pagina; // Página actual 
   
    const curso = await Cursos.findAll( { include: 'lecciones' });

        // Obtener el índice inicial y final de los cursos para la página actual
const startIndex = (currentPage - 1) * PAGE_SIZE;
const endIndex = startIndex + PAGE_SIZE;

// Dividir el arreglo de cursos en páginas
const cursosPaginados = curso.slice(startIndex, endIndex);

// Crear una respuesta con los cursos de la página actual y la información de paginación
const response = {
  success: true,
  message: "Total de cursos",
  data: cursosPaginados,
  pagination: {
    currentPage,
    totalPages: Math.ceil(curso.length / PAGE_SIZE),
    pageSize: PAGE_SIZE,
    totalItems: curso.length
  }
};
    return { success: true, menssage:"Total cursos", response };
  } catch (error) {
    console.error("Error al seleccionar el sendcurso:", error);
    return { success: false, message: "error de servidor" };
  }
};

//? Busqueda de curso por id
const sendCursosid = async (req) => {
  try {
    const { id } = req.params;
    if (!id) return { success: false, message: "Debe llenar el id del Curso" };
    const cursoid = await Cursos.findByPk(id, { include: 'lecciones' });
    if (!cursoid) return { success: false, message: "No se encontro el Curso" };

    return { success: true,message:"El curso corresponde", cursoid };
  } catch (error) {
    console.error("Error al seleccionar el sendCursosid:", error);
    return { success: false, message: "error de servidor" };
  }
};

//? Actualizacion de un curso por el id
const updateCurso = async (req) => {
  try {
    const { id } = req.params;
    const { logo, titulo, descripcion, fechaPublicacion, videoIntroductorio } =
      req.body;
    const { body } = req;
    if (!id) return { success: false, message: "Debes seleccionar un curso" };
    
    if (
      titulo === "" ||
      logo === "" ||
      descripcion === "" ||
      fechaPublicacion === "" ||
      videoIntroductorio === ""
    )
      return { success: false, message: "Debe llenar todos los campos" };

    const searchCurso = await Cursos.findOne({
      where: { id: id },
    });

    //? si existe el curso devuelve el error
    if (searchCurso) {
      if (searchCurso.softdelete) {
        await Cursos.update(body, { where: { id: parseInt(id) } });
         const editCurso = await Cursos.findOne({
          where: { id: id },
        });
        return { success: true, message: "Se edito correctamente el curso",editCurso };
      }else{
        return { success: false, message: "el curso ya ha sido eliminado logicamente" };
      }
    } else {
      return { success: false, message: "el curso No existe en la base de datos" };
    }
  } catch (error) {}
};

//? Eliminacion softdelete de un curso por el id
const deleteCurso = async (req) => {
  const { id } = req.params;
  if (!id) return { success: false, message: "Debes seleccionar un curso" };

  const searchCurso = await Cursos.findOne({
    where: { id: id },
  });

  //? si existe el curso devuelve el error
  if (searchCurso) {
    if (searchCurso.softdelete) {
      await Cursos.update(
        { softdelete: false },
        { where: { id: parseInt(id) } }
      );
      return {
        success: true,
        message: "Se realizo una eliminacion logica al curso",
      };
    } else {
      return {
        success: false,
        message: "El curso ya tiene una eliminacion logica",
      };
    }
  } else {
    return { success: false, message: "el curso No existe" };
  }
};


module.exports = {
  CreateCurso,
  sendCursos,
  sendCursosid,
  updateCurso,
  deleteCurso,
};
