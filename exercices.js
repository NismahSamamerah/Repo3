//1

// function sum(...args)
// {
 
//     return args.reduce((totalSum,currentValue) => totalSum + currentValue );
//     console.log(args);
// }
// console.log(sum(1,2,3,4,5));

// let arr = [1,2,3,4];
// let sum =0;


//     for(i =0 ;i<arr.length;i++){
//         sum +=arr[i];
//     }
//     console.log(sum);

// function sum(){
//     let sum =0;
//     for(const i of arguments){
//         sum = sum + i;
//     }
//     console.log(sum);
// }
// sum(1,2,3);
//     //2

//     let today = new Date();
//     let day = today.getDay();
//     let dayArr = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
//     console.log('Today is :'+dayArr[day]);

// let  hour = today.getHours();
// let  minute = today.getMinutes();
// let  second = today.getSeconds();
// console.log("Current Time : "+hour  + " : " + minute + " : " + second);

// //3

// let text = 'jsherolab';
// let el = '';
// for(let i =text.length-1; i>=0 ;i--) { 
// el +=str[i];
// }
// console.log(el);

//4

// let numbers = [1,2,3];
// let sum =0;
// function sum1(){
//     for (let i=0 ;i<=numbers.length; i++){
//         sum = sum + i;

//     }
//     console.log(sum);
// }
// sum1();

// function sum2(){
//     let i =0;
//     while(i<numbers.length){
//         sum = sum + i;
//     }
//     i++;
    
// }
// console.log(sum);
// sum2();

// function sum3(){
    
//         if (numbers.length === 0) {
//         return 0;
//         } else {
        
//         }
    
// }
// sum();
//5
// let arr1 = ['a','b','c'];
// let arr2 = [1,2,3];

// arr3 =[...arr1 ,...arr2];
// console.log(arr3);

// //6
let string ='vascript';

function fun1(){
    
if(string.startsWith('ja')){
    return string;
}else{
    first ='ja';
    first.string.concat('ja');
return;
}
console.log(string);
}
fun1();

//7
// let name ='nismah';
// function remove(string ,num){
// let pre = string.slice(0,string[num]);
// let aft = string.slice(string[num]+1,string.length);
// return pre.concat(aft); 
// }
// console.log(remove(name ,2));
// //8

// function max(x,y,z){
//     if(x>y && x>z){
// return x;
//     }else if(y>z && y>x){
// return y;
//     }else{
//         return z;
//     }
   
// }

// console.log(max(3,4,6));