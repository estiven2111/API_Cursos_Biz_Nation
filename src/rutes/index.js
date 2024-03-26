const { Router } = require("express");
const { userRouter } = require("./UserRouter");
const { authRouter } = require("./Auth");
const { CursoRouter } = require("./Cursos");
const {UserCursoRouter} = require("./UserCurso");
const {LessonRouter} = require("./Lesson");
const mainRouter = Router();

mainRouter.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenido a la mejor API</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background-color: #E5F39B;
            }
    
            h1 {
                color: #333;
                margin-bottom: 20px;
            }
    
            p {
                color: #666;
                margin-bottom: 10px;
                text-align: center;
            }
    
            .link {
                display: block;
                margin-bottom: 10px;
                color: #007bff;
                text-decoration: none;
                font-weight: bold;
            }
    
            .link:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <h1>👋 Bienvenido a la mejor API 👋</h1>
        <p>¡Gracias por visitarnos!</p>
        <p>En esta API podrás realizar el registro de un usuario el cual se almacenará en la base de datos que utilizamos con MySQL. </p>
        <p>Una vez registrado, podrás iniciar sesión y acceder a una variedad de funcionalidades emocionantes:</p>
        <ul>
            <li>Registro de Usuario</li>
            <li>Inicio de Sesión</li>
            <li>Operaciones específicas según el rol de usuario</li>
            <li>Exploración y selección de cursos</li>
            <li>Acceso al progreso del curso y lecciones</li>
        </ul>
        <p>¡No esperes más para comenzar tu viaje de aprendizaje con nosotros!</p>
        <a class="link" target="_blank" href="https://apicursosbiznation-production.up.railway.app/api/v1/docs">Visitar Documentación de la API 📖</a>
        <a class="link" target="_blank" href="https://drive.google.com/drive/folders/1MCTuQ2d7SKwdc1tN_kCfV-HkXDTeAZda?usp=sharing">Documentos Relacionados 📃</a>
        <a class="link" target="_blank" href="https://portafolio-estiven.web.app/">Portfolio Estiven Arboleda 💻</a>
        <a class="link" target="_blank" href="https://github.com/estiven2111">Github Estiven Arboleda 💼</a>
        <a class="link" target="_blank" href="https://www.linkedin.com/in/estiven-arboleda-bb9aa61a4/">LinkedIn Estiven Arboleda 🧑‍🎓</a>
    </body>
    </html>
    `);
});

mainRouter.use("/api",LessonRouter);
mainRouter.use("/api",userRouter);
mainRouter.use("/api",authRouter);
mainRouter.use("/api",CursoRouter);
mainRouter.use("/api",UserCursoRouter);


module.exports = { mainRouter };
