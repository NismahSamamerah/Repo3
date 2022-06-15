//isempty 
//peek(top)
//push /pop
let arr = [1,2,3,4,5];
function Stack(){
let numbers = [1,2,3,4,5];


function popfunction(numbers){
    numbers.length = numbers.length-1;
}
popfunction(numbers);
console.log(numbers);


function pushfunction(num){
        numbers[numbers.length]=num;
        
}

pushfunction(10);
console.log(numbers);

function peek(numbers){
    num=numbers[numbers.length-1]
    return num;
}

peek(numbers);
console.log(num);

}
Stack();







