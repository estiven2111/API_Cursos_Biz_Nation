'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
     [
      {
      nombreCompleto: 'Estiven arboleda',
      fechaNacimiento: '1991-05-05',
      email: 'estiven@gmail.com',
      password: "Estiven123!",
      rol: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombreCompleto: 'Juan perez',
      fechaNacimiento: '1991-05-05',
      email: 'juan@gmail.com',
      password: "Juan123!",
      rol: "estudiante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombreCompleto: 'carlos peralta',
      fechaNacimiento: '1991-05-05',
      email: 'carlos@gmail.com',
      password: "Carlos123!",
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
