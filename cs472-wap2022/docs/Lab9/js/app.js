// Lab 9

//Question 1
const person = {
    name: "",
    dateOfBirth: "",
    getName: function(){
        return this.name;
    },
    setName: function(name){
        this.name = name;
    }
};

const personJohn = Object.create(person,{
    name: {
            value:"John", 
            enumerable:true
        },
    dateOfBirth: {
        value:new Date(1998,11,10)
    }
});

console.log(`The person's name is ${personJohn.name}`);
console.log(`${personJohn.name} was born on ${personJohn.dateOfBirth}`);

//Question 2

const employee = {
    salary: 0,
    hireDate: new Date(),
    doJob: function(jobTitle){
        console.log(` ${this.name} is a ${jobTitle} who earns $${this.salary}`);
    }
}

// 1st way to make employee a person
/* const employee =Object.create(person, {
    salary: {value :0},
    hireDate: {value: new Date()},
    doJob: {value: function(jobTitle){
        console.log(` ${this.name} is a ${jobTitle} who earns ${this.salary}`);
    }}
});
*/
//2nd way to make employee a person  using .prototype
//employee.prototype = person;

//3rd way to make employee a person using setPrototypeOf, This method also sets every previously created employee to have the new prototype
Object.setPrototypeOf(employee,person);

console.log(employee);
const employeeAnna = Object.create(employee,{
    name: {value:"Anna"},

});
employeeAnna.salary = "249,995.00";
employeeAnna.doJob("Programmer");

//Question 3
function Person(name, dob){
    this.name = name;
    this.dateOfBirth = dob;
    
};

//Added the extra function to the prototype
Person.prototype.toString =  function(){
    return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`;        
};
const personPeter = new Person("Peter", new Date(1985,10,10));
console.log(personPeter.toString());