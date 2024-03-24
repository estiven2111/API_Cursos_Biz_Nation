const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Ajusta la ruta según la ubicación correcta de tu archivo de conexión

const Lesson = sequelize.define('Lecciones', {
  cursoId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  video: {
    type: DataTypes.STRING,
    allowNull: true
  }
});
module.exports = Lesson;
