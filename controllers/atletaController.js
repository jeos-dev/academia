const Atleta = require("../models/Atleta");

class AtletaController{
    static async relatorio(req, res){
        const status = req.query.s;
        const atletas = await Atleta.find();
        res.render("atleta/relatorio", {atletas: atletas, status});
    }

    static async detalhar(req, res){
        const atleta = await Atleta.findOne({mat:req.params.mat})
        res.render("atleta/detalhar", {atleta: atleta});
    }
    static async cadastrarPost(req,res){
        const atleta = req.body;
        const novoAtleta = new Atleta ({
            mat: atleta.mat,
            nome: atleta.nome,
            biotipo: atleta.biotipo
        });
        await novoAtleta.save();
        res.redirect("/atletas?s=1");
    }
    static cadastrarGet(req,res){
        const atleta = {}
        res.render("atleta/cadastrar", {atleta: atleta});
    }

    static async excluir(req,res){
        const atleta = await Atleta.deleteOne({mat:req.params.mat});
        res.redirect("/atletas?s=2");
    }

    static async atualizar(req,res){
        const atleta = await Atleta.findOne({mat:req.params.mat});
        res.render("atleta/cadastrar", {atleta: atleta});
    }
    static async atualizarPost(req,res){
        const atleta = req.body;
        await Atleta.updateOne({_id:atleta._id}, {
            mat: atleta.mat,
            nome: atleta.nome,
            biotipo: atleta.biotipo
    });

    res.redirect("/atletas?s=3");

    }
}



module.exports = AtletaController;