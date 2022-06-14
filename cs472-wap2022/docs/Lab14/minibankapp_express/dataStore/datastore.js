
"use strict";

const dataStore = (function(){
    const customerData = [];

    const getCustomerData = ()=>{
        return customerData;
    }
    const addCustomer = (customer)=>{
        customerData.push(customer);
    }
    return{
        getCustomerData: getCustomerData,
        addCustomer: addCustomer
    }

})();

module.exports = dataStore;