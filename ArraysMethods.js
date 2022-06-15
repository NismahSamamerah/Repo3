//check if the input is array or not
let arr =[1,2,3,4,5];
function fun1(){
    //way1
    // if(Array.isArray(arr)){
    //     return arr;
    // }
    ///way2
    if(arr.constructor === Array){
        return arr;
    }
}
console.log(fun1());
// let arr = ['a' ,'b' , 'c'];
// let arr1 = ['d' , 'e']
// arr2 = [1,22,4, 3,5]
// console.log(arr.toString(''));
// console.log(arr.join(''));
// // console.log(arr.length);
//  arr[arr.length] = 'n';
//  console.log(arr.join());
// console.log(arr.concat(arr1));
// // console.log(arr);
//  console.log(arr.toString());
//  console.log(arr.sort());
// // console.log(arr2.sort((a , b) =>{
// //     return a -b ;
// // }));

// max = Math.min.apply(null , arr2);
// console.log(max);


//to sort an array 
// let arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

//  let x = arr1.sort((a , b) =>{
//    return a-b;
   
// })
// console.log(x);

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;



let Upper = []