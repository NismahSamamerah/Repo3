const arr = [
    [ 1 , 2 , 3 ],
    [ 4 , 5 , 6 ],
    [ 7 , 8 , 9 ]
]

function TDArray(){
    for(i = 0 ; i < arr.length ; i++){
        let sum = 0;
        for( j = 0 ; j < arr [i].length ; j++){
            sum += arr[i][j];
        }
        
    }
        const count = arr[0].length;
    for ( j = 0 ; j < count ; j++){
        let sum = 0;
        for( i = 0 ; i < arr.length ; i ++){
            sum += arr[i][j];
        }
        console.log(` sum of column ${j} : ${sum}`);   
    }

    let dig1 = 0;
    let dig2 = 0;
        for(i = 0 ; i < arr.length ; i++){
            for( j = 0 ; j < arr [i].length ; j++){
                if(i===j){
                    dig1 +=arr[i][j];
                }else if ( i+j ==arr.length-1){
                    dig2 +=arr[i][j];
                }
            }
        }
        console.log(`sum of dig1 : ${dig1}`);
        console.log(`sum of dig2 : ${dig2}`);
}
TDArray();

