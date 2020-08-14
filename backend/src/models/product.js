const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        unique:true,
    },

    inStock:{
        type: Boolean,
    },

    registers:{
        type: [String],
    },
    
    quantity:{
        type: Number,
        required:true,
    },

    price:{
        type: Number,
        required:true,
    }

})

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product;