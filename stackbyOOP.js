
// class Stack{
//     constructor(){
//         this.items = [];
//     }

//     push(value){
//         this.items.push(value);
//     }

//     pop(){
//         this.items.pop();
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items.length-1;
//         } 
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }


//     print(){
//         if(!this.isEmpty()){
//             console.table(this.items);
//         } else {
//             console.log("Stack is empty");
//         }
        
//     }
// }

// const stack1 = new Stack();

// stack1.push(22);
// stack1.print();

///way2 without classes
function Stack(){
    let arr =[];
    let top = 0;

    push=(num) => {
            arr[top++] =num;
    }
    push(1);
    console.log(arr);

    pop = () =>{
        return arr[top--];
    }
    pop();
    console.log(pop());

    peek = ()=>{
        return[top-1]
    }
    
    console.log(peek());
}
Stack();