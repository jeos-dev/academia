const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");


const AtletaController = require("../controllers/atletaController");

routes.get("/atletas",auth, AtletaController.relatorio);
routes.post("/atletas",auth, AtletaController.cadastrarPost);
routes.get("/atletas/cadastrar",auth, AtletaController.cadastrarGet);
routes.get("/atletas/:mat",auth, AtletaController.detalhar);
routes.get("/atletas/excluir/:mat",auth, AtletaController.excluir);
routes.get("/atletas/atualizar/:mat",auth, AtletaController.atualizar);
routes.post("/atletas/editar/",auth, AtletaController.atualizarPost);

module.exports = routes;