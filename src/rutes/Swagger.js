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
    "./src/rutes/Documentacion/Auth/RegisterAuth.yaml","./src/rutes/Documentacion/Auth/LoginAuth.yaml",
    //TODO: rutas de USUARIOS
    "./src/rutes/Documentacion/User/Userid.yaml","./src/rutes/Documentacion/User/AllUser.yaml",
    //TODO: rutas de CURSOS
    "./src/rutes/Documentacion/Cursos/SendAllCursos.yaml","./src/rutes/Documentacion/Cursos/CreateCurso.yaml",
    "./src/rutes/Documentacion/Cursos/UpdateCurso.yaml","./src/rutes/Documentacion/Cursos/DeleteCursos.yaml",

     //TODO: rutas de CURSOSUSER
     "./src/rutes/Documentacion/CursoUser/Create.yaml",  "./src/rutes/Documentacion/CursoUser/GetCursos.yaml", 

        //TODO: rutas de LECCIONES
        "./src/rutes/Documentacion/Lecciones/Lesson.yaml",  
     
    //TODO: rutas de SCHEMAS  DATOS INFORMACION
    "./src/rutes/Documentacion/Schemas/User.yaml","./src/rutes/Documentacion/Schemas/Curso.yaml", 
    "./src/rutes/Documentacion/Schemas/CursoUser.yaml","./src/rutes/Documentacion/Schemas/InfoCursoUser.yaml",

     //TODO: rutas de SCHEMAS  BASES DE DATOS
     "./src/rutes/Documentacion/Schemas/BD_USER.yaml","./src/rutes/Documentacion/Schemas/BD_CURSO.yaml", 
     "./src/rutes/Documentacion/Schemas/BD_PROGRESCURSO.yaml","./src/rutes/Documentacion/Schemas/BD_LESSON.yaml",
     "./src/rutes/Documentacion/Schemas/BD_PROGRESLESSON.yaml",
    //TODO: rutas de ERROR EN PRUEBA 
    "./src/rutes/Documentacion/Errores/Error.yaml" //? Errores
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