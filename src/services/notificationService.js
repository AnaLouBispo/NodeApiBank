const Notification = require('../models/notificationModel');

const notificationService = {
  create: async (notificacao) => {
    try {
      if (!notificacao.id_cliente || !notificacao.mensagem || !notificacao.data_notificacao) {
        throw new Error("Campos obrigatórios ausentes");
      }

      return await Notification.create({
        id_cliente: notificacao.id_cliente, 
        mensagem: notificacao.mensagem,
        data_notificacao: notificacao.data_notificacao, 
      });
    } catch (error) {
      console.error(error); 
      throw new Error("Erro ao criar a notificação!");
    }
  },

  update: async (id, notificacaoToUpdate) => {
    try {
      const notificacao = await Notification.findByPk(id);
      if (!notificacao) {
        return null;
      }

      await notificacao.update(notificacaoToUpdate);
      await notificacao.save();
      return notificacao;
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao atualizar a notificação.");
    }
  },

  getById: async (id) => {
    try {
      const notificacao = await Notification.findByPk(id);
      if (!notificacao) {
        return null;
      }
      return notificacao;
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao buscar a notificação");
    }
  },

  getAll: async () => {
    try {
      return await Notification.findAll();
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao buscar todas notificações.");
    }
  },

  delete: async (id) => {
    try {
      const notificacao = await Notification.findByPk(id);
      if (!notificacao) {
        return null;
      }
      await notificacao.destroy();
      return notificacao;
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao deletar a notificação.");
    }
  },
};

module.exports = notificationService;  
