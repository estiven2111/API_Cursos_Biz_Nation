const nodemailer = require("nodemailer")
require("dotenv").config()

const sendEmail = async(email) =>{
    const {EMAIL_ADDRES,PASSWORD_EMAIL} = process.env
    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: EMAIL_ADDRES,
            pass: PASSWORD_EMAIL
        }
    }
console.log(email)
    const mensaje = {
        from: EMAIL_ADDRES,
        to: email.toLowerCase(),
        subject: "🎉 BIENVENIDO A BIZ NATION! 🎉",
        html: `
        <div style="background-color: black; padding: 10px 20px; text-align: center;">
            <img src="https://res.cloudinary.com/draxxv99e/image/upload/v1711161489/Prueba_Biz_Nation/BizNation-removebg-preview_n8g963.png" alt="BIZNATION! Logo" style="max-width: 400px;">
        </div>
        <head>
        <title>BIENVENIDO A BIZ NATION!</title>
    </head>
    <body>
        
        <div style="background-color: #f5f5f5; padding: 20px; font-family: Arial, sans-serif;">
            <div style="background-color: #ffffff; padding: 20px;">
                <h1 style="color: #333333;">¡BIENVENIDO A BIZ NATION!</h1>
                <p>Estimad@ ${email.toLowerCase()},</p>
                <p>¡👋 Te damos la bienvenida a Biz Nation, una empresa dedicada a la capacitación virtual para desarrollar y mejorar nuestras habilidades.</p>
                <p>En Biz Nation sabemos la importancia que es el conocimiento, por eso ofrecemos los mejores programas de formación y cursos online. 📖</p>
                    <p>Que nos destaca</p>
                    <ol>
                        <li>metodologías prácticas e innovadoras. 💻</li>
                        <li>técnicas de aprendizaje basadas en neurociencia. 🧠</li>
                        <li>Garantizar que nuestros estudiantes logren sus objetivos. 🧑‍🎓</li> 
                    </ol>
                    <p>¡Nos complace mucho tenerte aquí y estamos ansiosos por ser parte de tu viaje para alcanzar tus objetivos!.</p>
                    <p>Estamos comprometidos a brindarte el apoyo y la asistencia necesarios en cada paso del camino.</p>
                    <p> Tu éxito es nuestra prioridad, y estamos aquí para ayudarte a alcanzar tu máximo potencial. ¡Bienvenido BIZ NATION!</p>
            </div>
        </div>
    </body>`
    }

    const transport = nodemailer.createTransport(config); 
    await transport.sendMail(mensaje);
}

module.exports = { sendEmail }