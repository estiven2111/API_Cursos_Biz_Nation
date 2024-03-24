const { Router } = require("express");
const { HandlerUser } = require("../handler/index");
const { Authenticated } = require("../middleware/index");
const userRouter = Router();

//TODO: Informacion de un estudiante en especifico es para estudiante y administrador ya que esta informacion es la personal de cada uno
userRouter.get("/user", Authenticated.AsureAuth,HandlerUser.getUser); //? endpoint para obtener los datos de un usuario

//TODO: Informacion de todos los estudiantes solo por el administrador
userRouter.get(
  "/users",
  Authenticated.AsureAuth,
  Authenticated.validationRol("admin"),
  HandlerUser.getUsers
);
module.exports = { userRouter };
