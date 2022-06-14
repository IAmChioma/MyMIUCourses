
"use strict";
const dataStore = require('../dataStore/datastore');
const Account = require('../model/account');
const customerController = (function(){
    const getCustomerData = function(req,res){
        return dataStore.getCustomerData();
    }
    const addNewCustomerData = function(req,res){
        const customer_no = req.body.txtAccountNo;
        const txtCustomerName = req.body.txtCustomerName;
        const ddlAccountType = req.body.ddlAccountType;
        const customer = new Account(customer_no,txtCustomerName,ddlAccountType);
        dataStore.addCustomer(customer);
    }

    return {
        getCustomerData: getCustomerData,
        addNewCustomerData: addNewCustomerData
    }

})();

module.exports = customerController;