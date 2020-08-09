var Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/testesieel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true},
  ()=>console.log("Seeder connected to mongo"));

var products = [
    
new Product ({
    name:"Minicurso Arduino",
    price:5.00,
    inStock:true,
    quantity:"50",

}),
new Product ({
    name:"Palestra 1",
    price:0.00,
    inStock:true,
    quantity:"50",

}),
new Product ({
    name:"Palestra 2",
    price:0.00,
    inStock:true,
    quantity:"50",

}),
new Product ({
    name:"Viagem Técnica",
    price:10.00,
    inStock:true,
    quantity:"50",

}),

]

var done = 0;

for(var i = 0; i < products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    })
}

function exit(){
    mongoose.disconnect();
}