// import packages
require('dotenv').config();
const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
const port = process.env.PORT;
const router = require('./routers/routes');


// Templates Engine
app.engine('hbs',engine({extname:'hbs'}));
app.set('view engine','hbs');

// Routers
app.get('/',(req,res)=>{
  res.render('home');
})
app.use(router);

// Server Listing
app.listen(port,()=>{
  console.log(`The Server Listen on The Port of http://localhost:${port}`);
})