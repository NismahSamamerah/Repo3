//let x = 5;
function modnumber (num){

    if(num %3 == 0 && num%5 ==0){
        console.log('fuzz buz');
    }else if (num% 5 ==0){
        console.log('buzz');

    }else if(num% 3 ==0){
        console.log('fuz ');
    }else {
        console.log('no result');
    }

}
modnumber (15);

