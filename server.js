 const express = require("express");
 const mongoose = require("mongoose");
 const requireDir = require("require-dir");
 //iniciando o app
 
 const app = express();
 app.use(express.json());

 // iniciando o DB
 mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
  {   useUnifiedTopology: true }
  );
requireDir("./src/models");




// rota
app.use("/api" , require("./src/routes"));




 app.listen(3000);