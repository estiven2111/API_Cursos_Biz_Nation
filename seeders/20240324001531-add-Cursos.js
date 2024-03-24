'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cursos', 
    [
      {
      logo: 'https://res.cloudinary.com/draxxv99e/image/upload/v1711232366/Prueba_Biz_Nation/CURSOS/IMAGENES/node_rqmxl0.jpg',
      titulo: 'CLASE DE NODEJS',
      descripcion: 'Aprenderas a crear las mejores apis utilizando node.js',
      fechaPublicacion: "2024-03-23",
      videoIntroductorio: "https://res.cloudinary.com/draxxv99e/video/upload/v1711232513/Prueba_Biz_Nation/CURSOS/VIDEOS/TUTORIAL_PARA_INSCRIBIRSE_A_LOS_CURSOS_DE_THE_BIZ_NATION_CON_EL_CODIGO_PROMOCIONAL_APRENDOENCASA2020_fhf8tc.mp4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      logo: 'https://res.cloudinary.com/draxxv99e/image/upload/v1711232368/Prueba_Biz_Nation/CURSOS/IMAGENES/php_zndpsq.png',
      titulo: 'CLASE DE PHP',
      descripcion: 'Aprende lo mejor de este lengiaje de programacion',
      fechaPublicacion: "2024-03-23",
      videoIntroductorio: "https://res.cloudinary.com/draxxv99e/video/upload/v1711232513/Prueba_Biz_Nation/CURSOS/VIDEOS/TUTORIAL_PARA_INSCRIBIRSE_A_LOS_CURSOS_DE_THE_BIZ_NATION_CON_EL_CODIGO_PROMOCIONAL_APRENDOENCASA2020_fhf8tc.mp4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      logo: 'https://res.cloudinary.com/draxxv99e/image/upload/v1711232371/Prueba_Biz_Nation/CURSOS/IMAGENES/JS_dgljpq.jpg',
      titulo: 'CLASE DE JAVASCRIP',
      descripcion: 'Etes es el lengiaje universal aprende a dominarlo con nosotros de la forma mas facil y rapida en el mercado',
      fechaPublicacion: "2024-03-23",
      videoIntroductorio: "https://res.cloudinary.com/draxxv99e/video/upload/v1711232513/Prueba_Biz_Nation/CURSOS/VIDEOS/TUTORIAL_PARA_INSCRIBIRSE_A_LOS_CURSOS_DE_THE_BIZ_NATION_CON_EL_CODIGO_PROMOCIONAL_APRENDOENCASA2020_fhf8tc.mp4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      logo: 'https://res.cloudinary.com/draxxv99e/image/upload/v1711232369/Prueba_Biz_Nation/CURSOS/IMAGENES/nodesequemysql_xkuhm3.jpg',
      titulo: 'CLASE DE NODEJS, SEQUELIZE Y MYSQL',
      descripcion: 'Construyamos un entorno real donde aprenderas a realizar tareas de la vida real',
      fechaPublicacion: "2024-03-23",
      videoIntroductorio: "https://res.cloudinary.com/draxxv99e/video/upload/v1711232513/Prueba_Biz_Nation/CURSOS/VIDEOS/TUTORIAL_PARA_INSCRIBIRSE_A_LOS_CURSOS_DE_THE_BIZ_NATION_CON_EL_CODIGO_PROMOCIONAL_APRENDOENCASA2020_fhf8tc.mp4",
      createdAt: new Date(),
      updatedAt: new Date()
    }

  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cursos', null, {});
  }
};
