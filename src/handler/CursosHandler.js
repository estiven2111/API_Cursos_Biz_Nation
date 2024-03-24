const { ControllerClases  } = require("../controllers");

//? llamamos la ruta para crear un curso nuevo
const postCreateCurso = async (req,res) =>{
    try {
        const result = await ControllerClases.CreateCurso(req)
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//? llamamos la ruta para obtener todos los cursos
const getCursos = async (req,res) =>{
    try {
        const result = await ControllerClases.sendCursos(req)
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//? llamamos la ruta para obtener un curso por su id
const getCursosid = async (req,res) =>{
    try {
        const result = await ControllerClases.sendCursosid(req)
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


//? llamamos la ruta para editar el curso por su id
const putCursosid = async (req,res) =>{
    try {
        const result = await ControllerClases.updateCurso(req)
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const delCursosid = async (req,res) =>{
    try {
        const result = await ControllerClases.deleteCurso(req)
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



// //? llamamos la ruta para obtener el usuario y sus cursos
// const postUserCurso = async (req,res) =>{
//     try {
//         const result = await ControllerClases.UserCurso(req)
//         res.json(result)
//     } catch (error) {
//         res.status(400).json({error:error.message})
//     }
// }







module.exports = {postCreateCurso,getCursos,getCursosid,putCursosid,delCursosid}
