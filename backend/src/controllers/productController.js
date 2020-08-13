const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get("/product",(req,res)=>{
        res.send("Página de produtos")
})

router.post('/product', function(req, res, next){
    try{

        const product = Product.create(req.body);
        res.send(product)
        console.log("product created")

    }
    catch(err){res.send(err)}
});

router.put('/product/:id', function(req, res, next){
    
    Product.findByIdAndUpdate(req.params.id, req.body,{new: true}).
    then(function(){
    Product.findOne({_id: req.params.id}).
    then(product =>res.send(product),
    console.log("Product updated"));
    }).catch(next);
});

router.delete('/product/:id', function(req, res, next){
    Product.findByIdAndRemove({_id: req.params.id}).then(function(product){
        res.send(product)
        console.log("Product deleted");
    }).catch(next);
});
    

module.exports = (app) => app.use(router)




