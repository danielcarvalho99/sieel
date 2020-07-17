const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get("/cadastro",(req,res)=>{
        res.send("Página de cadastro")
})

router.post("/cadastro", async (req,res) =>{

    try{
        const user = await User.create(req.body);
        res.send({user});

    }
    catch(err){
        res.send("Erro: " + err);
    }

});

module.exports = (app) => app.use('/auth',router)


