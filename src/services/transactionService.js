const Transactions = require("../models/transactionsModel");

const transactionsService = {
  create: async (transacao) => {
    try {
      // Certifique-se de usar 'data_transacao' corretamente
      console.log(transacao.tipo_conta)
      return await Transactions.create({
        id_conta: transacao.id_conta,
        tipo_Conta: transacao.tipo_conta,
        tipo_transacao: transacao.tipo_transacao,
        valor: transacao.valor,
        data_transacao: transacao.data_transacao, // Certifique-se que é 'data_transacao' e não 'data'
      });
    } catch (error) {
      console.error(error); 
      throw new Error("Erro ao criar a transação!");
    }
  },

  getById: async (id) => {
    try {
      const transacao = await Transactions.findByPk(id);
      if (!transacao) {
        return null; 
      }
      return transacao;
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao buscar a transação");
    }
  },

  getAll: async () => {
    try {
      return await Transactions.findAll();
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao buscar todas as transações.");
    }
  },

  delete: async (id) => {
    try {
      const transacao = await Transactions.findByPk(id);
      if (!transacao) {
        return null; 
      }
      await transacao.destroy();
      return transacao;
    } catch (error) {
      console.error(error); 
      throw new Error("Ocorreu um erro ao deletar a transação.");
    }
  },
};

module.exports = transactionsService;
