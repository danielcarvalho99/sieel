const mongoose = require('../database');

const UserSchema = new mongoose.Schema({

        name: {
            type: String,
            required: true,
        },

        surname: {
            type: String,
            required: true,
        },

        tel: {
            type: String,
            required: true,
        },

        rg:{
            type: Number,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
        },

        password: {
            type: String,
            required: true,
            select:false,
        },

        university:{
            type: String,
            enum: ["USP","UFSCar","Outro"]
        },

        matricula:{
            type: Number,
            required:true,
        },

        createdAt:{
            type: Date,
            default:Date.now,
        }

    });

const User = mongoose.model('User',UserSchema);
module.exports = User;