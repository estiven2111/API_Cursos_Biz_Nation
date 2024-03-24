
const jwt = require("../utils/Jwt");
const Usuario = require("../models/User")

const AsureAuth = (req,res,next) =>{
   try {
    if (!req.headers.authorization) {
        res.status(403).json({msg:"Falta autenticacion"}) 
    }
const token = req.headers.authorization.replace("Bearer ", "")

const hasExpired = jwt.hashExpiredToken(token)
if (hasExpired) return res.status(400).json({msg:"El token ha expirado"})
const payload = jwt.decoded(token)
// una vez validado el token le doy el usuario a req y la llamo user 
req.user=payload
 next()
   } catch (error) {
    res.status(500).json({error:"Token invalidooo"}) 
   }
}

const validationRol = (rol) => {
return async(req,res,next) => {
    try {
        const { user_id } = req.user;
        const user = await Usuario.findByPk(user_id, {
            attributes: { exclude: ['password'] }
          });
         if(user.rol !== rol) return res.status(400).json({error:"No tiene permisos de administrador"}) 
        next()
    } catch (error) {
        res.status(500).json({error:"error en middleware"}) 
    }
}
}

module.exports = {
    AsureAuth,
    validationRol
}

