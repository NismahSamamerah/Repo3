
class DOB {
    day ; 
    month ; 
    year ;
    constructor(day , month , year){
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);
    }
    setDay(day){
        if(!(day >=1 && day<=30)){
            throw new Error ('day shuold be between 1 & 30');
        }
        this.day = day;       
    }
    setMonth(month){
        if(!(month >=1 && month <= 12)){
            throw new Error ('month shuold be between 1 & 12');
        }
        this.month = month;
    }
    setYear(year){
        if(!(year >= 1900 && year <= 2020)){
            throw new Error ('year shuold be between 1900 & 2020');
        }
        this.year = year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    getAge(currentyear){
        return currentyear - this.year;
    }
}

class Address {
    #streetName;
    #buldingNumber;
    #city;
    #country;

    constructor (streetName , buldingNumber , city , country){
        this.setStreetName(streetName);
        this.setBuldingNumber(buldingNumber);
        this.setCity(city);
        this.setCountry(country);
    }
    setStreetName(streetName){
        this.#streetName = streetName;
    }
    setBuldingNumber(buldingNumber){
        this.#buldingNumber = buldingNumber;
    }
    setCity(city){
        this.#city = city;
    }
    setCountry(country){
        this.#country = country;
    }
    getStreetName(){
        return this.#streetName;
    }
    getBuldingNumber(){
        return this.#buldingNumber;
    }
    getCity(){
        return this.#city;
    }
    getCoutry(){
        return this.#country;
    }
    getFullAddress(){
        return`full address is : ${this.#streetName}-${this.#buldingNumber}-${this.#city}-${this.#country}`
    }
}
class Name {
    #firstName;
    #lastName;
    constructor(firstname , lastname){
        this.setFirstName(firstname);
        this.setLastName(lastname);
    }
    #checkName(name){
        if(typeof name !== 'string' && !(name.length <2 && name.length >=50)){
            throw new Error (`name should be between 2 & 50`)
        }
    }
    setFirstName(firstName){
        this.#checkName(firstName);
        this.#firstName = firstName;
    }
    setLastName(lastName){
        this.#checkName(lastName);
        this.#lastName = lastName;
    }
    getFirstName(){
        return this.#firstName;
    }
    getLastName(){
        return this.#lastName;
    }
    getFullName(){
        return `full name is : ${this.#firstName} ${this.#lastName}`
    }
}

class Person {
    #idNumber;
    #dob;
    #address;
    #name;
    constructor(idNumber , dob , address , name){
        this.setIdNumber(idNumber);
        this.setDob(dob);
        this.setAddress(address);
        this.setName(name);
    }
    #checkName(id){
        if(typeof id !== 'string' && !(id.length <2 && id.length >=50)){
            throw new Error (`name should be between 2 & 50`)
        }
    }
    #checkInstanceOf(className , instance){
        if(!(instance instanceof className)){
            throw new Error ('instance Error')
        }
    }
    setIdNumber(idNumber){
        this.#checkName(idNumber);
        this.#idNumber = idNumber;
    }
    setDob(dob){
        this.#checkInstanceOf(DOB , dob);
        this.#dob = dob;
    }
    setAddress(address){
        this.#checkInstanceOf(Address , address);
        this.#address = address;
    }
    setName(name){
        this.#checkInstanceOf(  Name , name);
        this.#name = name;
    }
    getIdNumber(){
        return this.#idNumber;
    }
    getDob(){
        return this.#dob;
    }
    getAddress(){
        return this.#address;
    }
    getName(){
        return this.#name;
    }
}

class Student extends Person{
    parentId;
    courses = [];
    constructor(idNumber , dob , address , name , parentId , course1 , course2 , course3) {
        super(idNumber , dob , address , name);
        this.setParentId(parentId);
        this.setCoureses(course1);  
        this.setCoureses(course2);
        this.setCoureses(course3);     
    }
    setParentId(parentId){
        this.parentId = parentId;
    }
    setCoureses(courses){
        this.courses.push(courses);
    }
    getParentId(){
        return this.parentId;
    }
    getCourses(){
        return this.courses;
    }
}

class Parent extends Person{
    studentId = [];
    constructor(idNumber , dob , address , name , studentId1 , studentId2 ) {
        super(idNumber , dob , address , name);
        this.setStudentId(studentId1);  
        this.setStudentId(studentId2);     
    }
    setStudentId(studentId){
        this.studentId.push(studentId) ;
    }
    getStudentId(){
        return this.studentId;
    }

}
const dob = new DOB(13 , 5 , 1999);
console.log(dob.getDay());
console.log(dob.getAge(2020));

const address = new Address( 'alburj' , 15 , 'hebron' , 'palestine');
console.log(address.getBuldingNumber());
console.log(address.getFullAddress());

const name = new Name('nismah' , 'nofal')
console.log(name.getFullName());

const person = new Person('99' , dob , address , name);
console.log(person.getAddress().getBuldingNumber());
console.log(person.getDob().getDay());
console.log(person.getIdNumber());

const student = new Student('100' , dob , address , name , 12 ,'html' , 'css' ,'javascript' )
console.log(student.getParentId());
console.log(student.getCourses());
console.log(student.getAddress().getBuldingNumber());

const parent = new Parent('111' ,dob , address , name , '112' , '113');
console.log(parent.getStudentId());





