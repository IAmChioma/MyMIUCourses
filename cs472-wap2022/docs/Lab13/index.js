const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home/home');
const app = express();


app.use(express.urlencoded({extended:false}));
app.set('static',path.join(__dirname,"views"));
app.set("view engine", "pug");

app.use('', homeRouter);

app.use((req,res,next)=>{
    console.log('Error page not found using redirect');
    res.status(404).sendFile('/static/404.html');
});
const port_number = 3200;
app.listen(port_number,()=>{
    console.log(`Listening at port ${port_number}`);
});