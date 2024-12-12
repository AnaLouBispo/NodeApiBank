const Admin = require("../models/adminModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const adminService = require("../services/adminService");

const adminController = {
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;

      const admin = await Admin.findOne({ where: { email } });

      if (!admin) {
        return res.status(400).json({
          msg: "Email ou senha incorretos!"
        });
      }

      const isValid = await bcrypt.compare(senha, admin.senha);
      
      if (!isValid) {
        return res.status(400).json({
          msg: "Email ou senha incorretos!"
        });
      }

      const token = jwt.sign(
        { email: admin.email, nome: admin.nome },
        process.env.SECRET, { expiresIn: '1h' }
      );

      return res.status(200).json({
        msg: "Login realizado com sucesso!",
        token
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },

  create: async (req, res) => {
    try {
      const admin = await adminService.create(req.body);
      return res.status(201).json({
        msg: "Administrador criado com sucesso",
        administrador: admin, 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao tentar criar o administrador!",
      });
    }
  },

  update: async (req, res) => {
    try {
      const admin = await adminService.update(req.params.id, req.body);
      if (!admin) {
        return res.status(400).json({
          msg: "Administrador não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Administrador atualizado com sucesso",
        administrador: admin, 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao tentar atualizar o administrador.",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const admins = await adminService.getAll(); 
      return res.status(200).json({
        msg: "Lista de administradores:",
        admins,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar os administradores.",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const admin = await adminService.getById(req.params.id);
      if (!admin) {
        return res.status(400).json({
          msg: "Administrador não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Administrador encontrado",
        administrador: admin, 
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar o administrador.",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const admin = await adminService.delete(req.params.id);
      if (!admin) {
        return res.status(400).json({
          msg: "Administrador não encontrado.",
        });
      }
      return res.status(200).json({
        msg: "Administrador deletado com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar o administrador.",
      });
    }
  },
};

module.exports = adminController;
