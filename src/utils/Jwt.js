const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config()
const {JWT_SECRET_KEY} = process.env
const createAccessToken = (user) => {
  const expToken = new Date();
  // expToken.setHours(expToken.getHours() + 24);
  expToken.setMinutes(expToken.getMinutes() + 30);
  const payload = {
    token_type: "access",
    user_id: user.id,
    iat: Date.now(),
    exp: expToken.getTime(),
  };
  return jsonwebtoken.sign(payload, JWT_SECRET_KEY);
};

const refreshToken = (user) => {
  const expToken = new Date();
  expToken.setMonth(expToken.getMonth() + 1);

  const payload = {
    token_type: "refresh",
    user_id: user.id,
    iat: Date.now(),
    exp: expToken.getTime(),
  };
  return jsonwebtoken.sign(payload, JWT_SECRET_KEY);
};

const decoded = (token) => jsonwebtoken.decode(token, JWT_SECRET_KEY, true);

const hashExpiredToken = (token) => {
  const { exp } = decoded(token);
  const currenDate = new Date().getTime();
  //? validamos si el token ya expiro si retorna true se debe refrescar
  if (exp <= currenDate) return true;
  return false;
};

module.exports = {
    createAccessToken,
    refreshToken,
    decoded,
    hashExpiredToken
}
