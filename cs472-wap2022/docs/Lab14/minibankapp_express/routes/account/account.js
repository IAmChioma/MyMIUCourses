const express = require('express');
const customerController = require('../../controller/customer');
const accountRouter = express.Router();



accountRouter.get('/', (req,res)=>{
    //res.sendFile(path.join(__dirname,"../../views", 'account.html'));
    const accounts = customerController.getCustomerData();
    console.log(`List : ${accounts}`);
    res.render('account-list',{accounts:accounts});
});

accountRouter.post('/create', (req,res)=>{
    customerController.addNewCustomerData(req,res);
  //  const account = new Account(req.body.txtCustomerName,req.body.txtAccountNo,req.body.ddlAccountType )
  //  const queryString = `name=${req.body.txtCustomerName}&account_no=${req.body.txtAccountNo}&accountType=${req.body.ddlAccountType}`;
    res.redirect(303, `/account`)
});

//Didn't use the below anylonger bcause the data is no being passed to my array and i didnt have to send it to another url
accountRouter.get('/account-created', (req,res,next)=>{
    const account = new Account(req.body.txtCustomerName,req.body.txtCustomerName,req.body.txtAccountNo,req.body.ddlAccountType )
    const accounts = customerController.addNewCustomerData(account);
    res.render('account-list',{accounts:accounts});
   // res.sendFile(path.join(__dirname,"views", 'account.html'));
});



module.exports = accountRouter;