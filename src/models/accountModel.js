const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Clients = require('./clientModel'); 

const Account = sequelize.define('Account', { 
  id_cliente: {
    type: DataTypes.INTEGER,
    references: {
      model: Clients,  
      key: 'id',    
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  saldo: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
}, {
  timestamps: true
});


module.exports = Account;
