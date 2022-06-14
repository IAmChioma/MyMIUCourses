class Account {
    #name;
    #customer_no;
    #account_type;
    constructor(name, customer_no, account_type){
        this.#name = name;
        this.#customer_no = customer_no;
        this.#account_type = account_type;
    }

    get name(){
        return this.#name;
    }
    get customer_no(){
        return this.#customer_no;
    }
    get account_type(){
        return this.#account_type;
    }
}


module.exports = Account;