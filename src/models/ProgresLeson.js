const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 
const Usuario = require('./User');
const Lecciones = require('./Lesson'); 

const ProgresoLecciones = sequelize.define('ProgresoLecciones', {
  estado: {
    type: DataTypes.ENUM('pendiente', 'progreso', 'finalizado'),
    allowNull: false
  }
});

Usuario.hasMany(ProgresoLecciones);
ProgresoLecciones.belongsTo(Usuario);

Lecciones.hasMany(ProgresoLecciones);
ProgresoLecciones.belongsTo(Lecciones);


module.exports = ProgresoLecciones;
