// Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

function isArraytest (arr){
    // if (toString.call(arr) === "[object Array]"){

    // }
    // return true;
if(Array.isArray (arr)){
    return arr;
}
return 'not array';

}console.log(isArraytest([1,2,3,4]));

////////////////////
function isClone(arr){
    //return arr;
    return arr.slice(0);
}
console.log(isClone([5,6,7,[8,9]]));

/////////////////
function First (arr , n){
    return arr.slice(0 ,n);

}
console.log(First([2,3,4],3 ));

////////////////
function myColor(colors){
    return colors.join('+');

}
console.log(myColor(['red' , 'green' , 'blue']));

//////////
let arr = [1,2,2,4,4,22,33,24,24]
let str = arr.toString();
let res = [str[0]]
console.log(res);
console.log(str);

for(i= 1 ; i<str.length ; i++){
    if((str[i-1]) % 2 ===0 && (str[i])%2 ===0){
        res.push('-' ,str[i])
    }else{
        res.push(str[i])
    }
}
console.log(res.join(''));

/////////////
function 
sortArray(arr){
    let s =  arr.sort((a,b) =>{
        return a-b;
    });
    console.log(s);
    
}
sortArray([3, 8, 10,7, 6, 5, -4, 3, 2, 1 ]);
///////////
frequant

