/*
    class name = employee
    variables 
     1- id => number
     2- firstName => string
     3- lastName => string
     4- salary => number
    function 
     1 - build setter function for each variables
        1.a id should be number, should be between 100 to 10000
        1.b firstName should be string, should be between 2 to 30
        1.c lastName should be string, should be between 2 to 30
        1.d salary should be number, should be between 3000 to 12000
     2 - build getter function for each variables
        2.a for each variable return it as is
     3 - build function to return the yearly salary (salary * 12)
*/

// class Employee {
//     id;
//     firstName;
//     lastName;
//     salary;
// //typeof(ID) !== 'number'


//     setId(id){
//         if(!(typeof(id)== Number) && !(id >=100 && id <1000)){
//             console.log('id shoud be between 100 & 1000');
// //return;
//         }else{
//         this.id = id ;
//         }
//     }
//     setFirstName(firstName){
//         if(!(typeof(firstName)== String) && !(firstName.length >=2 && firstName.length <=30)){
//             console.log('first name shoud be between 2 & 30');

//         }
//         this.firstName = firstName;
// }
//     setLastName(lastName){
//         if(!(typeof(lastName) == String) && !(lastName.length >= 2 && lastName.length <= 30)){
//             console.log('last name shoud be between 2 & 30');
//         }
//         this.lastName = lastName;
//     }
//     setSalary(salary){
//         if(!(typeof (salary) == Number) && !(salary >=3000 && salary <12000)){
//             console.log('salary shoud be between 3000 & 12000');
//         }
//         this.salary = salary;
//     }

//     getId(){
//         return this.id;
//     }
//     getFirstName(){
//         return this.firstName;
//     }
//     getLastName(){
//         return this.lastName;
//     }
//     getSalary(){
//         return this.salary;
//     }
//     getYearlySlary(){
//        return this.salary *12;
//     }
// }

// let employee1 = new Employee();
// employee1.setId(101);
// employee1.setFirstName('n');
// employee1.setLastName('samamerah');
// employee1.setSalary(5000);

//  console.log(employee1.getId());
//  console.log(employee1.getFirstName());
//  console.log(employee1.getLastName());
//  console.log(employee1.getSalary());


//console.log(employee1.getYearlySlary());


// class employee {
//     #id;
//     #firstName;
//     #lastName;
//     #salary;

//     constructor(id , firstName1 , lastName ,salary){
//         this.setId(id);
//         this.setFirstName(firstName1);
//         this.setLastName(lastName);
//         this.setSalary(salary);
//     }
    
//     setId(id){
//         if(!(typeof id ===Number) && !(id >=100 && id <=10000)){
//             console.log('id shoud be between 100 & 10000');
//         }
//         this.#id = id;
//     }
//     setFirstName(fname){
//         if(!(typeof fname ===String) && !(fname.length > 2 && fname.length <= 30)){
//         console.log('first name should be between 2 & 30');
//         }
//         this.#firstName = fname;
//     }

//     setLastName(name){
//         if(!(typeof(name) ===String) && !(name.length > 2 && name.length <= 30)){
//             console.log('last name should be between 2 & 30');
//         }
//         this.#lastName = name;
//     }
//     setSalary(salary){
//         if(!(typeof(salary) === String) && !(salary > 3000 && salary <=12000)){
//             console.log('salary should be between 3000 & 12000');
//         }
//         this.#salary = salary;
//     }
//     getId(){
//         return this.#id;
//     }
//     getFirstName(){
//         return this.#firstName;
//     }
//     getLastName(){
//         return this.#lastName;
//     }
//     getSalary(){
//         return this.#salary;
//     }
//     getYearlySlary(y){
//         return this.#salary*y;
//     }

// }
// const employeeI = new employee(101, 'n' , 'samamerah' , 4000);
// //console.log(employeeI.getId());
// //console.log(employeeI.getFirstName());
// // console.log(employeeI.getLastName());
// // console.log(employeeI.getSalary());
// console.log(` Yearly Salary:${employeeI.getYearlySlary(12)}`);
class employee {
    #id;
    #firstName;
    #lastName;
    #salary;

    constructor(id , firstName1 , lastName ,salary){
        this.setId(id);
        this.setFirstName(firstName1);
        this.setLastName(lastName);
        this.setSalary(salary);
    }
    #checkname(name){
        if(!(typeof name ===String) && !(name.length > 2 && name.length <= 30)){
            return true;
        }
        return false;
    }
    #checkId(id){
        if(!(typeof id ===Number) && !(id >= 100 && id <= 10000)){
            return true;
        }
        return false;
    }
    #checksalary(salary){
        if(!(typeof salary ===Number) && !(salary >= 3000 && salary <= 12000)){
            return true;
        }
        return false;
    }
    setId(id){
        if(this.#checkId(id)){
            console.log('id shoud be between 100 & 10000');
        }
        this.#id = id;
    }
    setFirstName(fname){
        if(this.#checkname(fname)){
        console.log('first name should be between 2 & 30');
        }
        this.#firstName = fname;
    }

    setLastName(lname){
        if(this.#checkname(lname)){
            console.log('last name should be between 2 & 30');
        }
        this.#lastName = lname;
    }
    setSalary(salary){
        if(this.#checksalary(salary)){
            console.log('salary should be between 3000 & 12000');
        }
        this.#salary = salary;
    }
    getId(){
        return this.#id;
    }
    getFirstName(){
        return this.#firstName;
    }
    getLastName(){
        return this.#lastName;
    }
    getSalary(){
        return this.#salary;
    }
    getYearlySlary(y){
        return this.#salary*y;
    }

}
const employeeI = new employee(1, 'nismah' , 's' , 2000);
//console.log(employeeI.getId());
//console.log(employeeI.getFirstName());
// console.log(employeeI.getLastName());
// console.log(employeeI.getSalary());
console.log(` Yearly Salary:${employeeI.getYearlySlary(12)}`);