let numbers = [1,2,3,4,5,6];

numberofElements = () => {
    let num=numbers.length;
    return num;
}
addFirst = (num ,numbers) => {
    numbers.push(num);
    
}
addLast = (num ,numbers) => {
    numbers.unshift();
}
removeOddNumbers = (numbers) => {
    let odd = numbers.filter(num =>num %2 ==0)
    console.log(odd);
    
}

//console.log(numbers);
removeOddNumbers(numbers);
console.log();


