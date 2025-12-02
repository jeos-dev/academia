const express = require("express");
const routes = express.Router();

const AlunoController = require("../controllers/alunoController");

routes.get("/alunos", AlunoController.relatorio);
routes.post("/alunos", AlunoController.cadastrarPost);
routes.get("/alunos/cadastrar", AlunoController.cadastrarGet);
routes.get("/alunos/:mat", AlunoController.detalhar);
routes.get("/alunos/excluir/:mat", AlunoController.excluir);
routes.get("/alunos/atualizar/:mat", AlunoController.atualizar);
routes.post("/alunos/editar/", AlunoController.atualizarPost);

module.exports = routes;