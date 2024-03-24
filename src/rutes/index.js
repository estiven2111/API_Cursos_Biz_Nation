const { Router } = require("express");
const { userRouter } = require("./UserRouter");
const { authRouter } = require("./Auth");
const { CursoRouter } = require("./Cursos");
const {UserCursoRouter} = require("./UserCurso");
const {LessonRouter} = require("./Lesson");
const mainRouter = Router();


mainRouter.use("/api",LessonRouter);
mainRouter.use("/api",userRouter);
mainRouter.use("/api",authRouter);
mainRouter.use("/api",CursoRouter);
mainRouter.use("/api",UserCursoRouter);


module.exports = { mainRouter };
