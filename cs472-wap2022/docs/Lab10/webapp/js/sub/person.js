class Person{
    #name;
    #dateOfBirth;

    constructor(name, dateOfbirth){
        this.#name = name;
        this.#dateOfBirth = dateOfbirth;
    }

    getName(){
        return this.#name;
    };
    setName(value){
        this.#name = value;
    }
    getDateOfBirth(){
        return this.#dateOfBirth;
    }
    seDateOfBirth(value){
        this.#dateOfBirth=value;
    }

    toString(){
        return `Name: ${this.#name}, DateOfBirth: ${this.#dateOfBirth}`;
    }
}