const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get("/cadastro",(req,res,next)=>{
        res.send("Página de cadastro");
})

router.post('/cadastro', function(req, res, next){
    User.create(req.body).then(user =>
        res.send(user)).catch(next);
});

router.put('/cadastro/:id', function(req, res, next){
    
    User.findByIdAndUpdate(req.params.id, req.body,{new: true}).
    then(function(){
    User.findOne({_id: req.params.id}).
    then(user =>res.send(user),
    console.log("User updated"));
    }).catch(next);
});

router.delete('/cadastro/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user)
        console.log("User deleted");
    }).catch(next);
});

module.exports = (app) => app.use('/auth',router)


