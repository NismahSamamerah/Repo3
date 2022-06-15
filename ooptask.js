// class student {
//     userId ;
//     courses = [];
//     name ;
//     age ;
//     major;
//     city;
//     street;
//     country;

//     setUserId(idvalue) {
//         this.userId = idvalue;
//     }
//     addcourses(coursevalues) {
//         this.courses.push(coursevalues);
//     }
//     setname(namevalue) {
//         this.name = namevalue;
//     }
//     setage(agevalue) {
//         this.age = agevalue;
//     }
//     setmajor(majorvalue) {
//         this.major = majorvalue;
//     }
//     setacity(cityvalue) {
//         this.city = cityvalue;
//     }
//     setstreet(streetvalue) {
//         this.street = streetvalue;
//     }
//     setcountry(countryvalue) {
//         this.country = countryvalue;
//     }
//     // ....
//     toString() {
//         return `
//             userId = ${this.userId}
//             courses = ${this.courses}
//             name = ${this.name}
//             age = ${this.age}
//             major = ${this.major}
//             city = ${this.city}
//             street = ${this.street}
//             country = ${this.country}
//         ` ;
//     }
// }
// const student1 = new student();
// student1.setUserId('1')
// student1.setname('nismah');
// student1.setage(30);
// student1.setmajor('cs');
// student1.setacity('hebron');
// student1.setcountry('palestine');
// student1.setstreet('alsalam');
// student1.addcourses('cors1');
// student1.addcourses('cors2');

// const student2 = new student();
// student2.setUserId('2')
// student2.setname('ali');
// student2.setage(30);
// student2.setmajor('cs');
// student2.setacity('hebron');
// student2.setcountry('palestine');
// student2.setstreet('alsalam');
// student2.addcourses('cors1');
// student2.addcourses('cors2');


// console.log(student1.toString());
// console.log(student2.toString());


//by constructor without functions
// class students {
//     userId ;
//         courses = [];
//         name ;
//         age ;
//         major;
//         city;
//         street;
//         country;

//     constructor(userId , name , age , courses , city , country , street , major){
//         this.userId = userId;
//         this.name = name;
//         this.age = age;
//         this.courses = courses;
//         this.city = city;
//         this.country = country;
//         this.street = street;
//         this.major = major;

//     }
        

// }

// const student1 = new students( 1 , 'nismh' , 23 , ['html ,css'] , 'hebron' , 'palestine' , 'alsalam', 'cs');
// console.log(student1);


//by constructor
class student {
    UserId ;
    name;
    sge;
    courses = [];
    city ;
    country;
    street ;
    major;

    constructor(id ,name,age ,course1 , course2 ,city,country,street,major){
        this.setUserId(id);
        this.setName(name);
        this.setAge(age);
        this.setCourses(course1);
        this.setCourses(course2);
        this.setCity(city);
        this.setCountry(country);
        this.setStreet(street);
        this.setMajor(major);
    }
    setUserId(id){
        this.UserId = id;
    }
    setName (name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setCourses(course){
        this.courses.push(course);
    }
    setCity(city){
        this.city = city;
    }
    setCountry(country){
        this.country = country;
    }
    setStreet(street){
        this.street = street;
    }
    setMajor(major){
        this.major = major;
    }
    getAll(){
        return`
        userId = ${this.UserId}
                    courses = ${this.courses}
                    name = ${this.name}
                    age = ${this.age}
                    major = ${this.major}
                    city = ${this.city}
                    street = ${this.street}
                    country = ${this.country}
        `
    
    }
}

const student1 = new student(1,'nisma' ,23 ,'html' ,'css','hebron','palestine','alsalam','cs' )
console.log(student1.getAll());