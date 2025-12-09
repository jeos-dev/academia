const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");

const PersonalController = require("../controllers/personalController");

routes.get("/personals",auth, PersonalController.relatorio);
routes.post("/personals",auth, PersonalController.cadastrarPost);
routes.get("/personals/cadastrar",auth, PersonalController.cadastrarGet);
routes.get("/personals/:mat",auth, PersonalController.detalhar);
routes.get("/personals/excluir/:mat",auth, PersonalController.excluir);
routes.get("/personals/atualizar/:mat",auth, PersonalController.atualizar);
routes.post("/personals/editar/",auth, PersonalController.atualizarPost);

module.exports = routes;