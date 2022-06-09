const array = new Array(
    new Person("Anna Smith", new Date(1998, 11, 15)),
    new Person("Bob Jone", new Date(1945, 10, 16)),
    new Person("Carlos Slim Helu", new Date(1976, 8, 24))
);

for(const person of array){
    console.log(person.toString());
}

const employeeJim = new Employee('Jim Hanson',new Date(1999,11,1),"245,990.00");
employeeJim.doJob("Software Engineer");