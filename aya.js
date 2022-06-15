function fetchStudnetData() {
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            try {
                resolve( require('./students.json'));
            } catch (error) {
                reject('error occurred');
            }
        }, 2000);
    }) 
}

fetchStudnetData().then((data)=>{

    console.log(ubove50(data));
    console.log(undr50(data));
    console.log(max(data));
}).catch((error) =>{
    console.log(error);
})

function undr50(data) {
    number=0;
   data.forEach(element => {
       if (element['grade']<50) 
           number++;    
   });
   return number ; 
}

function ubove50(data) {
    number=0;
   data.forEach(element => {
       if (element['grade']>50) 
           number++;    
   });
   return number ; 
}
function max(data, number){
    data.sort((grade1, grade2) => {
        return grade1.grade - grade2.grade; 
    })
    for (let x = 0; x < number; x++){
        console.log(data[x]);
    }
}