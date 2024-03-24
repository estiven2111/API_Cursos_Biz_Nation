const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const UsuariosCursos = sequelize.define('UsuariosCursos', {
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cursoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = UsuariosCursos;