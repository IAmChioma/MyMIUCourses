
const express = require('express');
const path = require('path');
const app = express();
const homeRouter = express.Router();


homeRouter.get('/', (req, res, next) => {
    console.log('my index page');
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});
/*
homeRouter.post('/calculate', (req, res, next) => {
    const result = eval(req.body.first + req.body.operator + req.body.second);
    console.log(result);
    const queryString = `first=${req.body.first}&operator=${req.body.operator}&second=${req.body.second}&result=${result}`;
    res.redirect(303, `/result?${queryString}`);
});


homeRouter.get('/result', (req, res, next) => {
    const result = req.query.result;
    res.locals = { result: result };
    console.log(result);
    res.render('result');
});
*/ //This code has a flaw because the result is in the the query param so it can be modified by users


homeRouter.post('/calculate', (req, res, next) => {
    const queryString = `first=${req.body.first}&operator=${req.body.operator}&second=${req.body.second}`;
    res.redirect(303, `/result?${queryString}`);
});


homeRouter.get('/result', (req, res, next) => {
    let result;
    const first = parseInt(req.query.first);
    const second = parseInt(req.query.second);
   
    
    switch(req.query.operator){
        case "Add":
            result = first + second;
            break; //very important , else it will continue to others till the last if no break is present at all
        case "Substract":
            result = first - second;
            break;
        case "Multiply":
            result = first * second;
            break;
        case "Divide":
            result = first / second;
            break;
    }
   
    res.locals = { result: result };
    console.log(result);
    res.render('result');
});

module.exports = homeRouter;