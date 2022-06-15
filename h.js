//var
let name = 'nismah';
//array
let numbers = [1,2,3,4,5];
numbers.push(9);
numbers.pop();
numbers.shift();
numbers.unshift(8);
//object
let user = {
    name:'nismah',
    age:23
}
//add element of object
user.avg = 150;
user.salary = 600;
//object
let user1 = {
    name:'nismah',
    age:23,
    classes :[90,80,65,65 ],
    chars : {
        height:170,
        weight:60
    }   

}
user1.color = 'white';

//array of objects
let users = [
    
    {
        name:'nismah',
        age:23

    },
    {
        name:'ali',
        age:23

    }

]
let us = {
    name : 'ahmad',
    age : 30
}
users.push(us);

//function (add object element to array by function)
let userarr = [];
function addUser(name ,age){
    let userf = {
        name:'nismah',
        age:21
    }
    userarr.push(userf);

}
addUser('nismah' ,23);
//console.log(userarr);

//arrow function
addUser1 = (name ,age) =>{
    let userar = {
        name : 'ali' ,
        age :30
    }
    userarr.push(userar);
} 
addUser1('nismah',23);


//onother functions
let numbers1 = [1,2,3,4,5,6,7,8,9];
function NumOfElements(){
    let num = numbers1.length();
    return num;
}
function AddFirst(number){
    numbers1.unshift(number);

}
function AddLast(number){
    numbers1.push(number);

}

function removeOddNumbers(){
    let odd = numbers1.filter(n => n%2==0);
    console.log(odd);
    // let odd=numbers1.forEach(n => n%2==0);
    // console.log(odd);

}
AddFirst(10);
AddLast(90);
removeOddNumbers();
//console.log(numbers1);
//NumOfElements();


//filter
let Arr = [1,2,3,4,5,8,9,10];
let arr = Arr.filter(n => n<5);
//console.log(arr);

//