const Personal = require("../models/Personal");

class PersonalController{
    static async relatorio(req, res){
        const status = req.query.s;
        const personals = await Personal.find();
        res.render("personal/relatorio", {personals: personals, status});
    }

    static async detalhar(req, res){
        const personal = await Personal.findOne({mat:req.params.mat})
        res.render("personal/detalhar", {personal: personal});
    }
    static async cadastrarPost(req,res){
        const personal = req.body;
        const novoPersonal = new Personal ({
            mat: personal.mat,
            nome: personal.nome,
            especialidade: personal.especialidade
        });
        await novoPersonal.save();
        res.redirect("/personals?s=1");
    }
    static cadastrarGet(req,res){
        const personal = {}
        res.render("personal/cadastrar", {personal: personal});
    }

    static async excluir(req,res){
        const personal = await Personal.deleteOne({mat:req.params.mat});
        res.redirect("/personals?s=2");
    }

    static async atualizar(req,res){
        const personal = await Personal.findOne({mat:req.params.mat});
        res.render("personal/cadastrar", {personal: personal});
    }
    static async atualizarPost(req,res){
        const personal = req.body;
        await Personal.updateOne({_id:personal._id}, {
            mat: personal.mat,
            nome: personal.nome,
            especialidade: personal.especialidade
    });

    res.redirect("/personals?s=3");

    }
}



module.exports = PersonalController;