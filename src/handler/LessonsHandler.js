const {ControllerLessons} = require("../controllers")
const postLesson = async (req,res) =>{
    try {
        const result = await ControllerLessons.CreateLesson(req)
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {postLesson}