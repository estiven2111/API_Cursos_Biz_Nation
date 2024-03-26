const app = require("./src/app");
const sequelize = require("./src/db");
const { swaggerDocs} = require("./src/rutes/Swagger")
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 3008;

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Escuchando en el puerto ${PORT}`);
    swaggerDocs(app,PORT)
  });
});