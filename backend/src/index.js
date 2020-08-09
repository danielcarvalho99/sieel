const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const cadastro = require("../src/routes/cadastro.js")

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Controllers
require('./controllers/authControllers')(app);

// Rotas
app.use('/auth/cadastro',cadastro)

app.listen(3010,() =>{

    console.log("The server is running on port 3010");

});