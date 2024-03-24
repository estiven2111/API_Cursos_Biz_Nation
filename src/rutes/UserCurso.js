const Router = require("express")
const {UserCursoHandler} = require("../handler")
const { Authenticated } = require("../middleware/index");
const UserCursoRouter = Router()

UserCursoRouter.post('/relacion_usercurso/',UserCursoHandler.postCreateUserCurso)

module.exports = {UserCursoRouter}