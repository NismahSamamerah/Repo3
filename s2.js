// //shorthand
// // let number = 10;
// // let num = (number >8) ? 'yes':'no';
// // console.log(num);

// // let allowed = true;
// // let title = (allowed )? 'welcom':'undefined';
// // console.log(title);

// // //if else
// // let type = 'new';
// // let messege;
// // if( type ==='new'){
// //     messege = 'first time';
// // }
// // else if(type ==='old'){
// //     messege = 'last time'
// // }
// // else{
// //     messege = 'no messege'
// // }
// // //if else by 
// // shorthand 
// // let type1 = 'new';
// // let messege1 = type ==='new'? 'first time' :type  === 'old'? 'last time' :type ==='no messege';
// // //console.log(messege);

// //loops

// for( let i=0 ;i<5 ;i++){
//     console.log(i);
// }
//for in
// let people =['nismah','ali']
// for(let person in people){

//     //return index
//     //console.log("hi "+person);
//     //to return value
//     console.log(people[person]);

// }
// let cars = {
//     color :'black',
//     price : 10000

// }//for in object
// for(let car in cars){
//     console.log(car +":"+cars.car);
// }

// //for of
// let arr = [1,2,3,4,5];
// for(let i of arr){
//     console.log(i);
// }
// let i = 7;
// //while loop
// while (i < 10){
//     console.log(i);
//     i++;
// }
// //do while loop 
// do {
//     console.log(i);
//     i++;
// }while(i < 10);
//for each

// this let var 
//equality & identity
// const person1 = {
//     name :'nismah',
//     age :23,
//     full :function (){
//         return this.name;
//     }
// }
// console.log(person1.full());

// ///
const person2 = {
    name :'nismah',
    age :23
}
function testThis(){
    
    return this;
    
}
testThis();





