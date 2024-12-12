const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define('Admin', {
    id_administradores: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      idade: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false
      }
});

module.exports = Admin;