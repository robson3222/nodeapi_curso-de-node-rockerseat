 const express = require('express');
 const mongoose = require('mongoose');
 
 //iniciando o app
 const app = express();

 // iniciando o DB
 mongoose.connect('mongodb://localhost:27017/nodeapi',
  {   useNewUrlParser: true }
  );
require('./src/models/Product')



// primeira rota
app.get('/', (req, res) => {
   res.send("certo");
});





 app.listen(3000);