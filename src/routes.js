const express = require("express");
const routes = express.Router();


const ProductController = require("./controllers/ProductController");

routes.get("/products", (req, res) => {
   // Product.create({
      // title: "react native",
      // descripition: "Build native apps with react",
      // url: "http://github.com/facebook/react-native"
  //  });
 
    return res.send("certo");
 });

 module.exports = routes;