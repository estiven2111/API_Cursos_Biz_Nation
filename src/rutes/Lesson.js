const Router = require("express")
const {LesonsoHandler} = require("../handler")
const { Authenticated } = require("../middleware/index");
const LessonRouter = Router()

LessonRouter.post('/createlesson/:id',LesonsoHandler.postLesson)

module.exports = {LessonRouter}