let towDArray = [
    ['o', 'o', 'x'],
    ['x', 'x', 'o'],
    ['x', 'x' ,'o'],
];

function XOO(){
    
    
        for (let row = 0; row < towDArray.length; row++){
            
            let horizontallyres = '';
            for(let column = 0 ; column < towDArray[row].length; column++){
                horizontallyres += towDArray[row][column];
            }
            if(horizontallyres ==='xxx'){
                return 'x win'
            }else if(horizontallyres ==='ooo'){
                return 'o win'
            }
        
        }

        const columnCount = towDArray[0].length;
        for (let column = 0; column < columnCount; column++) {
            let verticallyres = ''
            for (let row = 0; row < columnCount; row++) {
                verticallyres += towDArray[row][column];
            }
            if(verticallyres ==='xxx'){
                return 'x win';
            }else if(verticallyres ==='ooo'){
                return 'o win';

            }

        }
    
    let digres1 = '';
    let digres2 = '';
        for(i = 0 ; i < towDArray.length ; i++){
            for( j = 0 ; j < towDArray [i].length ; j++){
                if(i === j){
                    digres1 +=towDArray[i][j];
                }
                if( i+j == towDArray.length-1){
                    digres2 +=towDArray[i][j];
                }

            }
            if(digres1 === 'xxx'){
                return 'x win';
            }
            else if(digres1 ==='ooo'){
                return 'o win';
            }
            else if(digres2 ==='xxx'){
                    return 'x win';
            }
            else if (digres2 ==='ooo'){
                return 'o win';
            }           
    }
}
console.log(XOO ());

        

