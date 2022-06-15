//Q(1)

function executeAfterTTL(callback ,TTL,arr){
    setTimeout(()=>{
        callback(arr);
    
    },TTL);
}

function callback(numbers){
    console.log(numbers);
}

executeAfterTTL(callback,2000,[1,2,3,4]);

