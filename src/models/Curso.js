const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Leccion = require("./Lesson")
const Curso = sequelize.define('Curso', {
  logo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fechaPublicacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  videoIntroductorio: {
    type: DataTypes.STRING,
    allowNull: false
  }
  ,
  softdelete: {
    type: DataTypes.BOOLEAN,
    defaultValue:true
  }
});
Curso.hasMany(Leccion, {  as: 'lecciones', foreignKey: 'cursoId' });
module.exports = Curso;
