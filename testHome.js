// function sum(a,b){
    let a = 3;
    let b = 2;
let result; 
if (a + b < 4) { 
   result = 'Below'; 
} else { 
 result = 'Over'; 
 }
// }
console.log(result);

function sun (a,b ){
    let result;
    if(a+b >4){
        result ='over'
    }else{
        result ='bellow'
    }
    console.log(result);
}
sun(1,2);

function sum(x ,y){
// let x =1;
// let y =2;
(x+y >4)? result='over':'bello';
console.log(result);
}
 sum(1,5);

 //////2//////
  function login(login,message){
 //let login = 'Director'
 //let message;
if (login == 'Employee') { 
 message = 'Hello'; 
} else if (login == 'Director') { 
 message = 'Greetings'; 
} else if (login == '') { 
 message = 'No login'; 
} else {

message = ''; 
}
console.log(message);
}
login('Director')


let login1 = 'Employee';
(login1 ==='Employee')? message='hello' :login1 ==='Director' ? message = 'Greetings' :login1 =''?message='NO login':'';
console.log(message);

///3////

function factorial(num){
    if(num ===0){
        return 1;
    }else{
    return num *factorial(num-1);
    }

}
let s =factorial(5);
console.log(s);

///4////
let x= 2;
let y =9;
let arr=[];
let j=0;
for(let i =x+1;i<y; i++){
    arr[j] =i;
    j++;

}
console.log(arr);

function rangeOfnumbers(x,y){
    let arr=[];
let j=0;
for(let i =x+1;i<y; i++){
    arr[j] =i;
    j++;

}
console.log(arr);

}
rangeOfnumbers(2,9);

let arr1=[];
function range(x,y){
    if(x==y){
        return 0;
    }else{
    arr1.push(x+1);
    range(x+1 ,y);
    }
console.log(arr1);
}
range(2,9);
//////5/////////

function booleanfun(value){
    if(value !==true && value !==false){
        return 'it is not boolean'
    }else {
        return 'its boolean'
    }

}
console.log(booleanfun(true));
console.log(booleanfun(1));

///8////
function fun1(){
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
delete student.rollno;
console.log(student);
}
fun1();

////////9/////////
function clock(){
    setInterval(()=>{
    let date = new Date();
    let houres = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(houres +':' + minutes +':'+ seconds );
},1000)
}
clock();

//////////10///////////
function fun1(arr){
arr = [{
    id: 1,
    title: 'Game of Thrones',
    year: 2011,
    stars: 5
},
{
    id: 2,
    title: 'ame of Thrones',
    year: 2011,
    stars: 5
}
]
arr.sort()
}