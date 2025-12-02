const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
class UsuarioController{
    static async relatorio(req, res){
        const status = req.query.s;
        const usuarios = await Usuario.find();
        res.render("usuario/relatorio", {usuarios, status});
    }

    static async detalhar(req, res){
        const usuario = await Usuario.findOne({_id:req.params._id})
        res.render("usuario/detalhar", {usuario});
    }
    static async cadastrarPost(req,res){
        const usuario = req.body;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha, salt);
        const novoUsuario = new Usuario ({
            nome: usuario.nome,
            email: usuario.email,
            senha: hash
        });
        await novoUsuario.save();
        res.redirect("/usuarios?s=1");
    }
    static cadastrarGet(req,res){
        const usuario = {}
        res.render("usuario/cadastrar", {usuario});
    }

    static loginGet(req,res){
        const status = req.query.s;
        res.render("usuario/login", {status});
    }

    static async loginPost(req,res){
        const usuario = await Usuario.findOne({email:req.body.email});
        if (usuario != null){ 
            if(bcryptjs.compareSync(req.body.senha, usuario.senha)){
                req.session.usuario = usuario.email;
                res.redirect("/");
            } else{
                res.redirect("/usuarios/login?s=1")
            }
        } else{
            res.redirect("/usuarios/login?s=1")
        }
    }

    static logout(req,res){
        req.session.usuario = null;
        res.redirect("/usuarios/login");
    }

    static async excluir(req,res){
        const usuario = await Usuario.deleteOne({_id:req.params._id});
        res.redirect("/usuarios?s=2");
    }

    static async atualizar(req,res){
        const usuario = await Usuario.findOne({_id:req.params._id});
        res.render("usuario/cadastrar", {usuario});
    }
    static async atualizarPost(req,res){
        const usuario = req.body;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha, salt);
        await Usuario.updateOne({_id:usuario._id}, {
            email: usuario.email,
            nome: usuario.nome,
            senha: hash
    });

    res.redirect("/usuarios?s=3");

    }
}



module.exports = UsuarioController;