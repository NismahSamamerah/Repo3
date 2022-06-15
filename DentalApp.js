class Patint {
    static idCount ;
    #id;
    #name;
    #age;
    #address;
    #email;
    #mobile;

    constructor(id , name, age , address ,email,mobile){
        Patint.idCount+=1;
        this.setId(id);
        this.setName(name);
        this.setAge(age);
        this.setAddress(address);
        this.setEmail(email);
        this.setMobile(mobile);
    }
    setId(id){
        this.id = id;
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setAddress(address){
        this.address = address;
    }
    setEmail(email){
        this.email = email;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getAddress(){
        return this.address;
    }
    getEmail(){
        return this.email;
    }
    geMobile(){
        return this.mobile;
    }
}

class Appointments {
    static id;
    #patintId;
    #date;
    #time;

    constructor( patintId , date , time){
        Appointments.id+=1;
        this.setPatintId(patintId);
        this.setDate(date);
        this.setTime(time);

    }
    setId(id){
        this.#id = id ;
    }
    setDate(date){
        this.#date = date;
    }
    setTime(time){
        this.#time = time;
    }
    getId(){
        return this.#id;
    }
    getDate(date){
        return this.#date;
    }
    getTime(){
        return this.#time;
    }
}

class Treatment {
    #appointmentId;
    // teethNum;
    // treatmentTooth;
    treatmentPlane;

    constructor(appointmentId){
        this.setOppintmentId(appointmentId);
    }
    setOppintmentId(appointmentId ){
        this.#appointmentId = appointmentId ;
    }
    getOppintmentId( ){
        return this.#appointmentId ;
    }
}