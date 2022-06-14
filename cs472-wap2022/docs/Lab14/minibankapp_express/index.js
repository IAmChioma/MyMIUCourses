const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home/home');
const accountRouter = require('./routes/account/account');
const  app = express();

app.set('views', path.join(__dirname, "views"));
app.set("view engine", 'pug');

app.use(express.urlencoded({extended:false}));
app.use('/static', express.static(path.join(__dirname, "public")));

app.use('',homeRouter);
app.use('/account',accountRouter);
app.get((req, res)=>{
    console.log("Server started");
});
const port_number = 3400;
app.listen(port_number,(req,res)=>{
    console.log("Server is running on port "+ port_number);
});