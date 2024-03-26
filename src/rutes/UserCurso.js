const Router = require("express");
const { UserCursoHandler } = require("../handler");
const { Authenticated } = require("../middleware/index");
const UserCursoRouter = Router();

const Usuario = require("../models/User");
const Cursos = require("../models/Curso");
const Lecciones = require("../models/Lesson");
const ProgesoCurso = require("../models/ProgresCurso");

UserCursoRouter.post(
  "/relacion_usercurso/",
  UserCursoHandler.postCreateUserCurso
);
UserCursoRouter.get("/cursosuser/:UserId", UserCursoHandler.getobtainCursoUser);

module.exports = { UserCursoRouter };
