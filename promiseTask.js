let stds =[];
function fetchStudnetData(){
    return new Promise (function(res ,rej){
        setTimeout(() => {
            res ([
                    {
                        name : "Leanne Graham",
                        grade: 54
                    },
                    {
                        name: "Ervin Howell",
                        grade: 99
                    },
                    {
                        name: "Clementine Bauch",
                        grade: 78
                    },
                    {
                        name: "Patricia Lebsack",
                        grade: 66
                    },
                    {
                        name: "Chelsey Dietrich",
                        grade: 88
                    },
                    {
                        name: "Mrs. Dennis Schulist",
                        grade: 89
                    },
                    {
                        name: "Kurtis Weissnat",
                        grade: 89
                    },
                    {
                        name: "Nicholas Runolfsdottir V",
                        grade: 90
                    },
                    {
                        name: "Glenna Reichert",
                        grade: 65
                    },
                    {
                        name: "Clementina DuBuque",
                        grade: 89
                    }
                ])
        
            }, 2000);
        
    })
}

function print() {
    let grades =stds.map((student) => student.grade)
    let sortarr = grades.sort();
    //let highestMark =Math.max(...grades);
    
    console.log('top 3 students :' +sortarr.slice(-3));
    

    console.log('==================');
    let counter1 = 0;

    for(let grade of grades){
        if(grade >=50){
        counter1++;
    }
}
console.log('number of students who passed : '+counter1);

console.log('================');

    let counter2 =0;
    for (const grade of grades) {
        if(grade < 50) {
            counter2++;
        }
        
    }
    console.log('number of students who failed : '+counter2);
    
}

fetchStudnetData().then((studentResponse) => {
    stds = studentResponse ;
        print();    
});


