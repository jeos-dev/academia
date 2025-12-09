const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

require('dotenv/config');

const session = require("express-session");
app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
}));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

const atletaRoutes = require("./routes/atletaRoutes");
app.use(atletaRoutes);

const personalRoutes = require("./routes/personalRoutes");
app.use(personalRoutes);

const usuarioRoutes = require("./routes/usuarioRoutes");
app.use(usuarioRoutes);


app.get("/", function (req,res){
    if(req.session.usuario != null){
        res.render("index");
    }
    else{
        res.redirect("/usuarios/login");
    }
})


app.use(function(req,res){
    res.status(404).render("404");
});

app.listen(process.env.PORT, function(){
    console.log("Rodando");
});