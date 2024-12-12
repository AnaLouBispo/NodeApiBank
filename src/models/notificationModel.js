const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Clients = require("./clientModel");  


const Notification = sequelize.define("Notification", { 
  id_notificacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    references: {
      model: Clients,  
      key: "id",     
    },
    allowNull: false,
  },
  mensagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_notificacao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Notification;  
