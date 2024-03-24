
const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Curso = require("./Curso"); 

const Usuario = sequelize.define("User", {
  nombreCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM("admin", "estudiante"),
    allowNull: false,
  },
});

Usuario.belongsToMany(Curso, { through: "UsuariosCursos", foreignKey: 'usuarioId' });

module.exports = Usuario;
