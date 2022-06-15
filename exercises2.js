
//1
function fun1(){
    let a = 2;
    let b =3
    let result = (a+b<4)? 'Below' : 'Over';
    console.log(result);
}
fun1();
//2

function fun2() {
    let login ='Employee';
    let result = login === 'Employee'?'Hello' :result ==='Director'? 'Greetings' :result==="" ?'no login' :'';
    console.log(result);
}
fun2();

//3
function factoral(number){
    if(number==0 ){
        return 1;
    }else {
        return number *factoral(number-1);
    }
    
}

console.log("Factorial of "  + " is " + factoral(5));


//4

    let num1 =2;
    let num2 =9;
    let arr =[];
    let j=0;
    for(let i =num1+1 ;i<num2 ;i++){
        arr[j] =i;
        j++;
    }
    
console.log(arr);




//5
function is_email(str){

let regexp =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
//let regex =/a-z/ig

        if(regexp.test(str)){

            return true;
        }else{
            return false;
        }
    }

console.log(is_email("nismahsamamerah@gmail.com"));


//6
function Stringword(str){
    numberOfwords = str.split(' ').length;
    console.log(numberOfwords);
    whiteSpaces = str.trim();
    console.log(str);
    console.log(whiteSpaces);

    //str = str.tirm();
}
console.log(Stringword(' java script language '));



//7 
function boleanfun(value){
    return value ===true || value ===false;
}
console.log(boleanfun(true));
console.log(boleanfun(false));
console.log(boleanfun('nismah'));



//9

// function currentTime() {

//     let date = new Date(); 
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     console.log("\""+hour + ":"+ minutes + ":" + seconds +"\"");  
//     }
//     setInterval(currentTime, 1000);

//10
var array = [
    {
        name: "nismah", 
        age: 23
    },
    {
        name: "ahmed", 
        age: 54
    }, 
];
// let sortarr =array.sort(compare=(a, b)=>{
//         if (a.name> b.name){
//         return 1;
//     }
//     else if(a.name< b.name){
//     return -1;
// }
// else{
//     return 0;
// }
// });

// console.log( sortarr);

let sortarr = array.sort((a,b)=>{
    if(a.name >b.name){
        return 1;
    }else if (a.name < b.name){
        return -1;
    }else{
        return 0;
    }
    
})
console.log(sortarr);

function sortarrfun(){
    let arr = [
        {
            name: "nismah", 
            age: 23
        },
        {
            name: "ali", 
            age: 40
        },
    {
        name: "zed", 
            age: 50
    }
    ]

    //let sortarr1 = arr.sort((a,b)=> (a.name >b.name)? 1 : (a.name ===b.name)? ((a.age >b.age))? 1 :-1 ) :-1)
let sortarr = arr.sort((a, b) => (a.name > b.name) ? 1 : (a.color === b.color) ? ((a.age > b.age) ? 1 : -1) : -1 )
console.log( sortarr );


}
sortarrfun();

