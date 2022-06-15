//way1
function palindrom(str){
    let i = 0;
    let j = str.length-1;
    while(i<j){
        if(str.charAt(i) !== str.charAt(j)){
            return false;
        }else if(str.charAt(i) == str.charAt(j)){
            i++;
            j--;
        }
    }
    return true;
}
console.log(palindrom('rasar'));

//way2
function palindrom1(str){
    let len = str.length;
    for(let i =0 ; i<len /2 ;i++){
        if(str[i] !==str[len-1-i]){
            return false;
        }
    }
    return true ;
}
console.log(palindrom1('rasar'));

//way3
function palindrom3(str){
    let splitstr = str.split('');
    //['r','a','s','a','r'] or //
    let reversestr = splitstr.reverse();
    //['r','a','s','a','r'] or //['s,'a','f']
    let joinreversestr = reversestr.join('');
    // rasar or// saf
    if(str ===joinreversestr){
        return true;
    }
    return false;
}
console.log(palindrom3('rasar')); 


