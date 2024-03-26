const Usuario = require("../models/User");
const Cursos = require("../models/Curso");
const Lecciones = require("../models/Lesson");
const ProgesoCurso = require("../models/ProgresCurso")
const ProgresoLecciones = require("../models/ProgresLeson")
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
       
await ProgesoCurso.create({
  estado: 'pendiente',
  fechaAprobado: Date.now(),
  UserId: usuario.id,
  CursoId: curso.id
});

const leccionesCreate = await Lecciones.findAll({
  where: { cursoId: cursoId }
});

for (const leccion of leccionesCreate) {
  await ProgresoLecciones.create({
    estado: 'pendiente',
    fechaAprobado: Date.now(),
    UserId: usuario.id,
    LeccioneId: leccion.id
  });
}


      msg = "agregado al usuario correctamente";
    }
    const usuarioConCursosYProgreso = await Usuario.findByPk(usuario.id, {
      include: [
        {
          model: Cursos,
          include: [
            {
              model: ProgesoCurso,
              where: { UserId: usuario.id },
            },
            {
              model: Lecciones,
              as: 'lecciones',
             include: [
              { 
                model: ProgresoLecciones,
                where: { UserId: usuario.id },
              }
            ],
            },
          ],
        },
      ],
    });

    return { success: true, message: msg, usuarioConCursosYProgreso };
  } catch (error) {
    console.error("Error al seleccionar el CreateCursoUser:", error);
    return { success: false, message: "error de servidor" };
  }
};

//? Obtener los cursos del ususario
const obtainCursoUser = async(req) =>{
  const { UserId } = req.params;
  const {numCursos,pagina} = req.query
  const PAGE_SIZE = numCursos; // Número de cursos por página
const currentPage = pagina; // Página actual 

  if (!UserId) {
    return { success: true, message: "Usuario o curso no encontrado" };
  }
  if (!numCursos || !pagina ) {
    return { success: true, message: "Debe seleccionar cantidad de Cursos y que pagina desea ver" };
  }

const usuarioConCursosYProgreso = await Usuario.findByPk(UserId, {
  include: [
    {
      model: Cursos,
      include: [
        {
          model: ProgesoCurso,
          where: { UserId: UserId },
        },
        {
          model: Lecciones,
          as: 'lecciones',
         include: [
          { 
            model: ProgresoLecciones,
            where: { UserId: UserId },
          }
        ],
        },
      ],
    },
  ],
});
const data = []
if (usuarioConCursosYProgreso) {
   usuarioConCursosYProgreso.Cursos.forEach(curso => {
     let Cursodata = {
    Logo : curso.logo,
     Titulo : curso.titulo,
     FechaPublicacion : curso.fechaPublicacion,
     VideoIntroductorio : curso.videoIntroductorio,
     }
    curso.ProgresoCursos.forEach(progreso => {
      Cursodata.estado = progreso.estado
    });
    Cursodata.Lecciones = curso.lecciones.length

 //? Calcular el número de lecciones finalizadas en este curso
 const leccionesFinalizadasCurso = curso.lecciones.filter(leccion => {
  return leccion.ProgresoLecciones.length > 0 && leccion.ProgresoLecciones[0].estado === 'finalizado';
}).length;
Cursodata.LeccionesFinalizada = leccionesFinalizadasCurso

data.push(Cursodata)

   });
} else {
  console.log('Usuario no encontrado');
}

// Obtener el índice inicial y final de los cursos para la página actual
const startIndex = (currentPage - 1) * PAGE_SIZE;
const endIndex = startIndex + PAGE_SIZE;

// Dividir el arreglo de cursos en páginas
const cursosPaginados = data.slice(startIndex, endIndex);

// Crear una respuesta con los cursos de la página actual y la información de paginación
const response = {
  data: cursosPaginados,
  pagination: {
    currentPage,
    totalPages: Math.ceil(data.length / PAGE_SIZE),
    pageSize: PAGE_SIZE,
    totalItems: data.length
  }
};

return { success: true, message: "Total de cursos", response };

}


module.exports = { CreateCursoUser,obtainCursoUser };
