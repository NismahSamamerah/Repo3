class Birds {
    name ; 
    type;
    constructor(name , type){
        this.name = name;
        this.type = type;
    }
    eat(){ };
    talk(){ };
}
class FlayebleBird extends Birds {
    constructor(name , type){
        super(name , type);
    }
    fly(){ };
}
class chicken extends Birds {
    constructor(name , type){
        super(name , type);
    }
    eat(){
        console.log('chicken eat');

    }
    talk(){
        console.log('chicken talk');

    }
}
class   Dove extends FlayebleBird {
    constructor(name , type){
        super(name , type);
    }
    eat(){
        console.log('dove eat');

    }
    talk(){
        console.log('dove talk');

    }
   
    fly(){
        console.log('dove can fly ');
    }
}
const dove1 = new Dove;
dove1.fly();