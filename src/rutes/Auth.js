const { Router } = require("express");
const { HandlerAuth} = require("../handler/index");
const authRouter = Router();

authRouter.post("/register", HandlerAuth.postRegister);
authRouter.post("/login", HandlerAuth.postLogin);


module.exports = { authRouter };
