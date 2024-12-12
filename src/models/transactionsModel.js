const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Conta = require("./accountModel");


const Transactions = sequelize.define("Transactions", {  
  id_transacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_conta: {
    type: DataTypes.INTEGER,
    references: {
      model: Conta,  
      key: "id",     
    },
    allowNull: false,
  },
  tipo_Conta: {
    type: DataTypes.ENUM(
      "Corrente",
      "Poupança",
      "Salário",
      "Mista",
      "Digital",
      "Universitária",
      "Conjunta",
      "Solidária"
    ),
    allowNull: false,
  },
  tipo_transacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  data_transacao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});


module.exports = Transactions;  
