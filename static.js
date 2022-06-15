class x{
    static y = 11;
    v = 0;
    static fun1(){
        console.log(`from`);;
    }
    
}
const x1 = new x();
console.log(x1.v);
console.log(x.y);
console.log(x.fun1());
;
// const  newx1 = new x();
class Validator{
    static name ; 
    static validateIsNumber(num){
        return typeof num === 'number';
    }
    static validateIsString(str){
        return typeof str =='string';
    }
//     staticvalidateStringLength(str , max , min){
//         if(typeof str !== 'string' && !(max.length >2 &&min.length <20)){
//             return true;
//         }
//         return false;
//     }
//     static ValidationGender(gender){
//         if(gender ==='male'){
//             return 'ali';
//         }else{
//             return 'nismah';
//         }
//     }
//     static Calculate(n){
//         return n**2;
//     }
 }
// //const x = 10;
// Validator.name='nismah';
// Validator.name = 'ali';

const isnumber1 = Validator.validateIsNumber('l');
console.log(isnumber1);
console.log(Validator.validateIsString('l'));
// let gender = Validator.ValidationGender('female')
// console.log(gender);
// console.log(Validator.Calculate(2));
// console.log(Validator.staticvalidateStringLength('nismah'));

    // static checkInstanceNumber( instance){
    //     let count = 0;
    //     if(instance instanceof Instance){
    //         count++;
    //     }
    //     return count;
    // }
        
    // static checkInstanceNumber( instance){
    //     let count = 0;
    //     if(instance instanceof Instance){
    //         count++;
    //     }
    //     return count;
    // }
// class Instance {
//     static Count = 0;

//     constructor(staticCount){
//         Instance.Count++;
    
//     }


// }
// const Instanse1 = new Instance();
// const Instance2 = new Instance();
// console.log(Instance.Count);

class Name {
    static count = 0 ;
constructor(){
Name.count++;

}
}
const name1 = new Name();
const name2 = new Name();
console.log(Name.count);



