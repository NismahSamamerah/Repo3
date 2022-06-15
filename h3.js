// function first (callback){
//     console.log('hi');
//     callback();
// }
// first(function(){
//     console.log('hello');
// })

// function calc(num1,num2,res){
//     let sum =  num1+num2;
//     res(sum);

// }
// calc(2,6 , function(res){
//     console.log(res);
// });

// setTimeout(function () {
//     console.log('nis');
// } ,5000)


// function firstFunc (){
//     console.log('first');
//     setTimeout(secondFunc,5000);
// }

// function secondFunc(){
//     console.log('second');
// }
// setTimeout(firstFunc ,5000);

//parameter function
// function fun1(fun2){
//     console.log('fun1');
//     fun2();
// }
// // function fun2(){
// //     console.log('fun2');
// // }
// // fun1();
// fun1(function (){
//     console.log('fun2');
// });

// function function1(){
//     console.log('function1');
//     setTimeout(function2 ,5000);
// }
// function function2(){
//     console.log('fuction2');
// }
// setTimeout(function1(),5000);

function calc(num1, num2 ,res){
    console.log("result :");
    let sum=num1+num2;
    res(sum);

}
calc(5,6,function(sum1){
console.log(sum1);
})
