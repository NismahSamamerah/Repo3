const towDArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// for (let row = 0; row < towDArray.length; row++){
//     for( let column = 0 ; column < towDArray[row].length; column++){
//     console.log(`row = ${row} column = ${column} :: value =${towDArray[row][column]}`);
//     }
// }

function TDArray (towDArray){
    
    for (let row = 0; row < towDArray.length; row++){
        let sum = 0;
        for(let column = 0 ; column < towDArray[row].length; column++){
            sum += towDArray[row][column];
            
            //sum = 0;
        }   
        console.log(`row = ${row}  :: value =${sum}`);
    }
    //column
const columnCount = towDArray[0].length;
    for (let column = 0; column < columnCount; column++) {
        let sum = 0;
        for (let row = 0; row < columnCount; row++) {
            sum += towDArray[row][column];
        }
        console.log(`sum column ${column + 1} = ${sum}`);
    }
    


let dig1 = 0;
    let dig2 = 0;
    for (let row = 0; row < towDArray.length; row++) {
        for (let column = 0; column < towDArray[row].length; column++) {
            if (row === column) {
                dig1 += towDArray[row][column];
            }

            if (row + column === towDArray.length - 1) {
                dig2 += towDArray[row][column];
            }
        }
    }
    console.log(`sum dig1 = ${dig1}`);
    console.log(`sum dig2 = ${dig2}`);
}

TDArray (towDArray);
