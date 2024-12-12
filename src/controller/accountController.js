const accountService = require("../services/accountService");

const accountController = {
  create: async (req, res) => {
    try {
      const conta = await accountService.create(req.body); 
      return res.status(201).json({
        msg: "Conta criada com sucesso",
        Conta: conta,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao tentar criar a conta!",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const contas = await accountService.getAll(); 
      return res.status(200).json({
        msg: "Contas:",
        contas,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar as contas.",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const conta = await accountService.getById(req.params.id);
      if (!conta) {
        return res.status(400).json({
          msg: "Conta não encontrada!",
        });
      }
      return res.status(200).json({
        msg: "Conta encontrada",
        conta,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar a conta.",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const conta = await accountService.delete(req.params.id);
      if (!conta) {
        return res.status(400).json({
          msg: "Conta não encontrada.",
        });
      }
      return res.status(200).json({
        msg: "Conta deletada.",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar a conta.",
      });
    }
  },
};

module.exports = accountController; 
