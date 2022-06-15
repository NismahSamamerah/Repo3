


//we need to write a function run after 5000 ms then this function will call another function after 5000ms

// function firstFunc(){
//     console.log("First Function");
//     setTimeout(secondFunc, 5000 ,'nismah');
// }

// function secondFunc(name){
//     console.log("Second Function"+name);
// }

///OR (we can use function or arrow funtion)
setTimeout(() =>{},2000);//arrow
setTimeout(function(){//normal
    console.log("First Function");
    setTimeout(function(name){
        console.log("Second Function"+name);
    },5000)
}, 5000 );




//arrow function
// function print(){
//     console.log('hi');
// }
// const print1 = () =>{
//     print();
//     console.log('nismah');
// }
// print1();

// const obj = {
//     fName:'nismah',
//     lName :'nofal',
//     age:23,
//     address:{
//         city :'hebron',
//         street :'street1'
//     }
// }

// let name =obj.fName;
//let city = obj.address.city;
//console.log(city);
// let age=obj.age;
// console.log(name);
// console.log(age);


// const {fName :firstname ,lName ,age ,address,fatherName = 'abd' ,address :{city}} = obj;
// console.log(firstname);
// console.log(address);
// console.log(fatherName);
// console.log(city);


//normal
// function withoutDestructuring(){
//     const fName = obj.fName;
//     const lName = obj.lName;
//     const age = obj.age;
//     const city=obj.address.city;
//     const street=obj.address.street;

// }
// withoutDestructuring();
// console.log();

// function withDestructuring(){
    
//     const {fName :firstname ,lName : lastname ,fathername ='default'} =obj;
// }
// withDestructuring();
// console.log(fName);





///destructuring//
// const obj = {
//     fName:'nismah',
//     lName :'nofal',
//     age:23,
//     address:{
//         city :'hebron',
//         street :'street1'
//     }
// }
// function withoutDestructuring(){
//     let fName = obj.fName;
//     let lName = obj.lName;
//     let age = obj.age;
//     let city = obj.address.city;
//     let street = obj.address.street;

//     console.log(fName);
//     console.log(lName);
//     console.log(age);
//     console.log(city);
//     console.log(street);
// }
// withoutDestructuring();

// function withDestructuring(){
//     const {fName :firstname ,lName :lastname,age ,fatherName = 'abd' ,address :{city} ,address :{street}} = obj;
//     console.log(firstname);
//     console.log(lastname);
//     console.log(fatherName);
//     console.log(age);
//     console.log(city);
//     console.log(street);
// }
// withDestructuring();
//desructuring//

//spread operation 
// arr = [1,2,3,4,5];
// console.log(...arr);
// //
// arr1= [1,2,3,4];
// arr2 = [5,6,7,8];
// let arr3 = [...arr1 ,...arr2];
// console.log(...arr3);
// //
// arrOne = [1,2,3];
// arrTow = [4,5,6];
// customArr = [1,2,3,...arrTow,7,8,9];
// console.log(customArr);
// //
// //arrFirst = arrOne;
// arrFirst = [...arrOne];
// arrFirst.push(10);
// console.log(arrFirst);
// console.log(arrOne);

// console.log(Math.min(...arrOne));


