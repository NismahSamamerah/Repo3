// function sum (){
//     let sum =0;
//     for(i of arguments){
//         sum =sum +i;
        
//     }
//     return sum;
// }

// console.log(sum(1,2,3));

// //2
// function getdate(){
//     let today = new Date();
//     let day = today.getDay();
//     let dayArr =["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
//     console.log('today is:'+dayArr[day]);
//     let hour = today.getHours();
//     let minute =today.getMinutes();
//     let second =today.getSeconds();
//     var prepand = (hour >= 12)? " PM ":" AM ";
//     hour = (hour >= 12)? hour - 12: hour;
//     if (hour===0 && prepand===' PM ') 
//     { 
//     if (minute===0 && second===0)
//     { 
//     hour=12;
//     prepand=' Noon';
//     } 
//     else
//     { 
//     hour=12;
//     prepand=' PM';
//     } 
//     } 
//     if (hour===0 && prepand===' AM ') 
//     { 
//     if (minute===0 && second===0)
//     { 
//     hour=12;
//     prepand=' Midnight';
//     } 
//     else
//     { 
//     hour=12;
//     prepand=' AM';
//     } 
//     }
//     console.log('Current time is : '+hour+':'+minute+':'+second+prepand);
    
// }
// getdate();

// //3
// let string = 'jsherolab';
// let finalstring ='';
// for(let i=string.length-1; i>=0;i--){
//     finalstring +=string[i];
// }
// console.log(finalstring);

//
let arr1 = [1,2,3,4,5];
let sum1 = 0;
function forsum(){
for(let i=0;i<arr1.length;i++){
    sum1 +=arr1[i];
}
console.log('sum by using for:' +sum1);
}
forsum();

function whilesum(){
let i=0;
while(i<arr1.length){
    sum1 += arr1[i];
    i++;
}

console.log('sum by using while:'+sum1);
}
whilesum();

function sumRecursion(arr ,i) {
     
    if(i <=0){
        return 0;
    }
   
    return arr1[i-1] + sumRecursion(arr1,i-1);


}


console.log('sum by using recursion:'+sumRecursion(arr1,arr1.length ));

//5
let arr = ['a','b','c'];
let arr2 = [1,2,3,4,5];

let x=arr.concat(arr2);
console.log(x);

//6
let text ='vascript';
function fun1(){
if(text.startsWith('ja')){
return text;
}else{
    let str ='ja';
    text.str.concat('ja');
}
console.log(text);
}
fun1();


