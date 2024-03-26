const Router = require("express");
const { handlerCursos } = require("../handler/index");
const { Authenticated } = require("../middleware/index");
const CursoRouter = Router();

//TODO: Todos los cursos no necesitan validacion ya que es para el landinpage
CursoRouter.get("/sendcursos", handlerCursos.getCursos);

//TODO: Detalle del curso solo para administradores y estudiantes
CursoRouter.get(
  "/sendcursos/:id",
  Authenticated.AsureAuth,
  handlerCursos.getCursosid
);

//TODO: Edicion del curso solo para administradores
CursoRouter.put(
  "/putcursos/:id",
  Authenticated.AsureAuth,
  Authenticated.validationRol("admin"),
  handlerCursos.putCursosid
);
//TODO: Eliminacion del curso solo para administradores
CursoRouter.delete(
  "/deletecursos/:id",
  Authenticated.AsureAuth,
  Authenticated.validationRol("admin"),
  handlerCursos.delCursosid
);
// //TODO: Creacion del curso solo para administradores
CursoRouter.post(
  "/createcurso",
  Authenticated.AsureAuth,
  Authenticated.validationRol("admin"),
  handlerCursos.postCreateCurso
);


module.exports = { CursoRouter };
