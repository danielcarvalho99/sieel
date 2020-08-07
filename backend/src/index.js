const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cadastro = require("../src/routes/cadastro.js")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Controllers
require('./controllers/authControllers')(app);

// Rotas
app.use('/auth/cadastro',cadastro)
app.use('/auth/user/:id')

app.listen(3010,() =>{

    console.log("O servidor está rodando");

});