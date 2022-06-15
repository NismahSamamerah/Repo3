// class Address {

//     #streetName;
//     #buildingNumber;
//     #country;
//     #city;

//     constructor(streetName, buildingNumber, country, city) {
//         this.setStreetName(streetName);
//         this.setBuildingNumber(buildingNumber);
//         this.setCountry(country);
//         this.setCity(city);
//     }

//     setStreetName(name) {
//         this.#streetName = name;
//     }

//     setBuildingNumber(number) {
//         this.#buildingNumber = number;
//     }

//     setCountry(name) {
//         this.#country = name;
//     }

//     setCity(name) {
//         this.#city = name;
//     }

//     getStreetName() {
//         return this.#streetName;
//     }

//     getBuildingNumber() {
//         return this.#buildingNumber;
//     }

//     getCountry() {
//         return this.#country;
//     }

//     getCity() {
//         return this.#city;
//     }
// }

// class Person {
//     #firstName;
//     #lastName;
//     #classAddress;

//     setAddress(streetName, buildingNumber, country, city) {
//         this.#classAddress = new Address(streetName, buildingNumber, country, city);
//     }

//     getAddress() {
//         return this.#classAddress;
//     }

//     #checkName(name) {
//         if (name !== undefined && !(name.length <= 50 && name.length >= 2)) {
//             return true;
//         }
//         return false;
//     }

//     setFirstName(name) {
//         if (this.#checkName(name)) {
//             console.log('first name length should be between  2  and 50');
//             return;
//         }
//         this.#firstName = name;
//     }

//     setLastName(name) {
//         if (this.#checkName(name)) {
//             console.log('last name length should be between  2  and 50');
//             return;
//         }
//         this.#lastName = name;
//     }

//     getFirstName() {
//         if (this.#firstName === undefined || this.#firstName === null) {
//             console.log('please set the fist name');
//             return;
//         }
//         return this.#firstName.toUpperCase();
//     }

//     getLastName() {
//         return this.#lastName.toUpperCase();
//     }
// }

// const person1 = new Person();
// person1.setAddress('al slam', 22, 'palstain', 'hebron');
// console.log(person1.getAddress().getStreetName());
// console.log(person1.getAddress().getBuildingNumber());
// console.log(person1.getAddress().getCity());
// console.log(person1.getAddress().getCountry());
// person1.setFirstName('moham');
// person1.setLastName('imwas');
// console.log(person1.getFirstName());
// console.log(person1.getLastName());

///my

class Address {

    #streetName;
    #buildingNumber;
    #country;
    #city;
    constructor(streetname , buildingnumber , city , country){
        this.setStreetName(streetname);
        this.setBuildingNumber(buildingnumber);
        this.setCity(city);
        this.setCountry(country);

    }
    setStreetName(streetname){
        this.#streetName = streetname;
    }
    setBuildingNumber(buildingnumber){
        this.#buildingNumber = buildingnumber ;
    }
    setCountry(country){
        this.#country = country;
    }
    setCity(city){
        this.#city = city;
    }
    getStreetName(){
        return this.#streetName;
    }
    getBuildingNumber(){
        return this.#buildingNumber;
    }
    getCity(){
        return this.#city;
    }
    getCountry(){
        this.#country;
    }
}

class Person {
        #firstName;
        #lastName;
        #classAddress;

setFirstName(fname){
    this.#firstName = fname;
}
setLastName(lname){
    this.lastname = lname;
}
setAddress(streetName , buildingNumber , city , country){
    this.#classAddress = new Address (streetName , buildingNumber , city , country);
}
getAddress(){
    return this.#classAddress;
}
getFirstName(){
    return this.#firstName;
}
getLastName(){
    return this.#lastName;
}
}
const person1 = new Person();
person1.setFirstName('nismah');
person1.setLastName('sam');
person1.setAddress('alsalam' ,2 , 'hebron' ,'palestine');
console.log(person1.getAddress().getBuildingNumber);
