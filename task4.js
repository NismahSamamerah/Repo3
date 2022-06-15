//reduce
let numbers = [1, 2, 3, 4, 5, 6, 7, 10];

let sum = numbers.reduce((previousValue, currentValue) =>{
    return previousValue + currentValue;
});

console.log('sum of array elements is :'+sum);


function fun1(){
    let numbers =[1,2,3,4,5];
    let even =0;
    let odd =0;
    for(const i in numbers){
        if(i%2==0){
            even +=numbers[i];
        }else{
            odd +=numbers[i];
        }
    }
    for(let i =0;i<numbers.length;i++){
    
        if(i %2==0){
            even +=numbers[i];
        }else{
            odd +=numbers[i];
        }
    }
    console.log('sum even index = '+even);
    console.log('sum even index = '+odd);

}
fun1();

// function numbersFun(){
    //     for(let i=0; i<numbers.length; i++){
    //         if (i %2 ==0){
    //             evenNum +=numbers[i];
    //         }else{
    //             oddNum +=numbers[i];
    //         }
    //     }
    // }
    // console.log('sum of even'+evenNum);
    // numbersFun('sum of odd' +oddNum);
//}    