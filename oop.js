// class ourArray {
//     //variable or property
//     items = [];
 
//     //behavior or functions
//     addElement(number) {
//         return this.items.push(number);
//     }

//     getArrayAfterMult(multNumber) {
//         return this.items.map((item) => item * multNumber);
//     }

// }
// //make an instance or object of the class for accsses to the class content
// const newInstanceFormOurArray = new ourArray(30);
// newInstanceFormOurArray.addElement(10);
// newInstanceFormOurArray.addElement(20);
// newInstanceFormOurArray.addElement(30);
// const newArray = newInstanceFormOurArray.getArrayAfterMult(2);
// console.log(newArray);


///with constructor
class ourArray {
    items = [];

    constructor(item1,item2){
        this.setItems(item1);
        this.setItems(item2);

    }
    setItems(item){
        this.items.push(item);
    }
    getItems(mult){
        return this.items.map((item) =>item*mult);
    }

}
const Array1 = new ourArray(1,2);

console.log(Array1.getItems(14));