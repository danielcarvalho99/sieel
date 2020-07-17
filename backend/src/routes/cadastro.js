const express = require("express")
const router = express.Router()
const path = require("path")
const User = require('../models/user');


router.post('/',(req,res) =>{



        const newUser = {

            name: req.body.name,
            surname:req.body.surname,
            rg:req.body.rg,
            tel:req.body.tel,
            matricula: req.body.matricula,
            email: req.body.email,
            password: req.body.password,
            university: req.body.university
        }

        new User(newUser).save().then(()=>{
            console.log(`O usuário foi criado`);
            }).catch((err) =>{
            console.log("Não foi possível criar o usuário")
            })
       
    })


module.exports = router