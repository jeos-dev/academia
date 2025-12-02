const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");

const UsuarioController = require("../controllers/usuarioController");

routes.get("/usuarios", auth, UsuarioController.relatorio);
routes.post("/usuarios", UsuarioController.cadastrarPost);
routes.get("/usuarios/cadastrar", UsuarioController.cadastrarGet);
routes.get("/usuarios/excluir/:_id", auth, UsuarioController.excluir);
routes.get("/usuarios/atualizar/:_id", auth, UsuarioController.atualizar);
routes.post("/usuarios/editar/", auth, UsuarioController.atualizarPost);
routes.get("/usuarios/login", UsuarioController.loginGet);
routes.post("/usuarios/login", UsuarioController.loginPost);
routes.get("/usuarios/logout", auth, UsuarioController.logout);
routes.get("/usuarios/:_id", auth, UsuarioController.detalhar);




module.exports = routes;