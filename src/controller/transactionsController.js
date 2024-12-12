const transactionService = require('../services/transactionService'); 

const transactionController = { 
  create: async (req, res) => {
    try {
      const transacao = await transactionService.create(req.body); 
      return res.status(201).json({
        msg: "Transação criada com sucesso",
        transacao,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao tentar criar a transação!",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const transacoes = await transactionService.getAll(); 
      return res.status(200).json({
        msg: "Todas as Transações",
        transacoes,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar as transações.",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const transacao = await transactionService.getById(req.params.id); 
      if (!transacao) {
        return res.status(400).json({
          msg: "Transação não encontrada!",
        });
      }
      return res.status(200).json({
        msg: "Transação encontrada",
        transacao, 
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar a transação.",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const transacao = await transactionService.delete(req.params.id); 
      if (!transacao) {
        return res.status(400).json({
          msg: "Transação não encontrada.",
        });
      }
      return res.status(200).json({
        msg: "Transação deletada com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar a transação.",
      });
    }
  },
};

module.exports = transactionController; 