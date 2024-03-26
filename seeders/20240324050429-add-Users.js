'use strict';
const bscrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password = "Estiven123!"
    const salt = bscrypt.genSaltSync(10);
    const hashPassword = bscrypt.hashSync(password, salt);
    await queryInterface.bulkInsert('Users',
     [
      {
      nombreCompleto: 'carla jiraldo',
      fechaNacimiento: '1991-05-05',
      email: 'carla@gmail.com',
      password: hashPassword,
      rol: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombreCompleto: 'Juan perez',
      fechaNacimiento: '1991-05-05',
      email: 'juan@gmail.com',
      password: hashPassword,
      rol: "estudiante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombreCompleto: 'carlos peralta',
      fechaNacimiento: '1991-05-05',
      email: 'carlos@gmail.com',
      password: hashPassword,
      rol: "estudiante",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
