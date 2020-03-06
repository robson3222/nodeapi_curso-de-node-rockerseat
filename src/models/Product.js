const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
 title:{
     type:String,
     require: true,
 },
 description:{
     type: String,
     required: true,
 },

 createdDat:{
     type: Date,
     default: Date.now,
 },

});

mongoose.model("Product" , ProductSchema);