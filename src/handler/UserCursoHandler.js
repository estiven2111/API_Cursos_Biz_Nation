const {ControllerUserCursos} = require("../controllers")
//? llamamos la ruta para obtener el usuario y sus cursos
const postCreateUserCurso = async (req,res) =>{
    try {
        const result = await ControllerUserCursos.CreateCursoUser(req)
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {postCreateUserCurso}
