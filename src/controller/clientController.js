const clientService = require("../services/clientServer");  
const Client = require("../models/clientModel");  

const clientController = {
  create: async (req, res) => {
    try {
      const { nome_cliente, email } = req.body;

      const clienteCriado = await Client.create({  
        nome_cliente,
        email,
      });

      return res.status(201).json({
        msg: "Cliente criado com sucesso!",
        cliente: clienteCriado,  
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.",
      });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    try {
      const clienteUpdate = await Client.findByPk(id); 
      if (!clienteUpdate) {
        return res.status(404).json({
          msg: "Cliente não encontrado",
        });
      }

      const updatedCliente = await clienteUpdate.update({
        nome,
        email,
      });

      return res.status(200).json({
        msg: "Cliente atualizado com sucesso",
        cliente: updatedCliente,  
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const clientes = await clientService.getAll();  
      return res.status(200).json({
        msg: "Todos os Clientes",
        clientes,  
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Ocorreu um erro ao buscar os clientes. Por favor, tente novamente mais tarde.",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const cliente = await clientService.getById(req.params.id);  
      if (!cliente) {
        return res.status(404).json({
          msg: "Cliente não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Cliente encontrado",
        cliente, 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Ocorreu um erro ao buscar o cliente. Por favor, tente novamente mais tarde.",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const clienteDeletado = await clientService.delete(req.params.id);  
      if (!clienteDeletado) {
        return res.status(404).json({
          msg: "Cliente não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Cliente deletado com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Ocorreu um erro ao deletar o cliente. Por favor, tente novamente mais tarde.",
      });
    }
  },
};

module.exports = clientController; 
