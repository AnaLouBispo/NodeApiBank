const Account = require("../models/accountModel");

const accountService = {
  create: async (conta) => {
    try {
      return await Account.create({
        id_cliente: conta.id_cliente,
        saldo: conta.saldo,
      });
    } catch (error) {
      throw new Error("Erro ao criar conta!");
    }
  },

  getById: async (id) => {
    try {
      const account = await Account.findByPk(id); 
      if (!account) {
        return null;
      }
      return account;
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar a conta");
    }
  },

  getAll: async () => {
    try {
      return await Account.findAll(); 
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar todas as contas.");
    }
  },

  delete: async (id) => {
    try {
      const account = await Account.findByPk(id); 
      if (!account) {
        return null;
      }
      await account.destroy(); 
      return account;
    } catch (error) {
      throw new Error("Ocorreu um erro ao deletar a conta.");
    }
  },
};

module.exports = accountService; 
