const app = require("./src/app");
const sequelize = require("./src/db");
const { swaggerDocs} = require("./src/rutes/Swagger")
const http = require("http");
const server = http.createServer(app);
// const Usuario = require("./src/models/User");
// const Curso = require("./src/models/Curso");
// const Lecciones = require("./src/models/Lesson");
// const ProgresoCurso = require("./src/models/ProgresCurso");
// const ProgresoLecciones = require("./src/models/ProgresLeson");
const PORT = process.env.PORT || 3008;




// sequelize.sync({ force: false }).then(() => {
//   server.listen(PORT, "0.0.0.0", () => {
//     console.log(`Escuchando en el puerto ${PORT}`);
//     swaggerDocs(app,PORT)
//   });
// });
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Escuchando en el puerto ${PORT}`);
  swaggerDocs(app,PORT)
});