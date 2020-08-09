const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    name:{
        
        type: String,
        required:true,

    },

    inStock:{

        type: Boolean,
        

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