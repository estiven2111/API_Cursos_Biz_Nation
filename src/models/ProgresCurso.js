const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 
const Usuario = require('./User'); 
const Curso = require('./Curso'); 

const ProgresoCurso = sequelize.define('ProgresoCurso', {
  estado: {
    type: DataTypes.ENUM('pendiente', 'progreso', 'finalizado'),
    allowNull: false
  },
  fechaAprobado: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

Usuario.hasMany(ProgresoCurso);
ProgresoCurso.belongsTo(Usuario);

Curso.hasMany(ProgresoCurso);
ProgresoCurso.belongsTo(Curso);

module.exports = ProgresoCurso;
