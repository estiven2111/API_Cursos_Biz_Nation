const Router = require("express");
const { UserCursoHandler } = require("../handler");
const { Authenticated } = require("../middleware/index");
const UserCursoRouter = Router();

UserCursoRouter.post(
  "/relacion_usercurso/",
  Authenticated.AsureAuth,
  UserCursoHandler.postCreateUserCurso
);
UserCursoRouter.get(
  "/cursosuser/:UserId",
  Authenticated.AsureAuth,
  UserCursoHandler.getobtainCursoUser
);

module.exports = { UserCursoRouter };
