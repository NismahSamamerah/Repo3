

// const arr = [1, 2, 3, 4, 5, 6, 8, 7];

// let counter = 0;

// for(let value of arr){
//     if(value%2 === 0){
//         counter++;
//     }
// }

// console.log(counter);

// let str = "hello this is a test";

// const arr = str.split(' ');
// console.log(arr);

// function wordCount(str){
//     str = str.tirm(" ");
//     str = str.replace(/\s\s+/g, ' ');
//     console.log(str);
//     return str.match(/[^\s]+/g);
// }
// console.log(wordCount("Aya Jawad Oweinah"));

// function countWords(str) {
//     let resultString = str.trim();
    
//     return resultString;
//     //str.split(' ').length;

//     }
//     countWords(" java script language ");
//     console.log(resultString);
    

//console.log(string);
//console.log(string1);
// let str =' nismah nofal samamerah ';
// let str1=str.trim();
// let str2=str.split(' ');
// console.log(str);
// console.log(str2);
let arr = [];
let range = function(x, y){
    if (x == y){
        return 0;
    }
    arr.push( x + 1 );
    range(x+1 , y-1);
    return arr;
}
console.log(range(2,9));

