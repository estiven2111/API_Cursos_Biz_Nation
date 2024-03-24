const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Basic Meta Informations about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "📖 Prueba Backend - NodeJS Biz Nation 📖",description:"Realiza las peticiones creadas en estos endpoind ", version: "1.0.0" },
  },
  apis: [
    //TODO: rutas de Authenticacion
    "./src/rutes/Auth.js","./src/rutes/documentacion/Auth/RegisterAuth.yaml","./src/rutes/documentacion/Auth/LoginAuth.yaml",
    //TODO: rutas de USUARIOS
    "./src/rutes/documentacion/User/Userid.yaml","./src/rutes/documentacion/User/AllUser.yaml",
    //TODO: rutas de CURSOS
    "./src/rutes/documentacion/Cursos/SendAllCursos.yaml","./src/rutes/documentacion/Cursos/CreateCurso.yaml",
    "./src/rutes/documentacion/Cursos/UpdateCurso.yaml","./src/rutes/documentacion/Cursos/DeleteCurso.yaml",
     
    //TODO: rutas de ESQUEMAS BASES DE DATOS INFORMACION
    "./src/rutes/documentacion/Schemas/User.yaml","./src/rutes/documentacion/Schemas/Curso.yaml", //? base de datos shemas
    //TODO: rutas de ERROR EN PRUEBA
    "./src/rutes/documentacion/Errores/Error.yaml" //? Errores
  ],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `📖 Version 1 Docs are available on https://apicursosbiznation-production.up.railway.app/api/v1/docs`
  );
};

module.exports = { swaggerDocs };