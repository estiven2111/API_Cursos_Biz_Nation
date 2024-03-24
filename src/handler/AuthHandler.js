const { ControllerAuth } = require("../controllers");

const postRegister = async (req,res) =>{
    try {
        const result = await ControllerAuth.Register(req)
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const postLogin = async (req,res) =>{
    try {
        const result = await ControllerAuth.Login(req)
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports = {postRegister,postLogin}
