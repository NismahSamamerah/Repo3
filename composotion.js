/*
    class point 
    variables  (x , y) 
    validation 
        x must be number 
        y must be number 
    methods 
    1 - setter for x,y
    2 - getter for x,y;
    3 - distance @params antherPoint  (must be instance of point class)
    
    class Square 
        variables  (point1, point2, point3, point4) 
    validation 
        point1 must be instance of Point class 
        point2 must be instance of Point class 
        point3 must be instance of Point class 
        point4 must be instance of Point class 
    methods 


    1- setter for all points
    2- getter for all points
    3- area (first check if it's valid Square)
    4- isValid return value (true, false )

*/
class Point {
    #x;
    #y;

    constructor( x , y){
        this.setx(x);
        this.sety(y);
    }
    #checknumber(number){
        if(typeof number !== 'number'){
            throw new Error(`point must be a number ,${typeof number} given`);
        }
    }
    #checkinstanceof(point){
        if(!(point instanceof Point)){
            throw new Error (`point must be a point instance `)
        }
    }
    setx(x){
        this.#checknumber(x);
        this.#x = x;
    }
    sety(y){
        this.#checknumber(y);
        this.#y = y;
    }
    getx(){
        return this.#x;
    }
    gety(){
        return this.#y;
    }
    distance(point){ //must be instance of point class
        this.#checkinstanceof(point);
        return Math.sqrt((this.getx() -point.getx())**2 + (this.gety()- point.gety())**2)
    }
}
class Square {
    #point1;
    #point2;
    #point3;
    #point4;

    constructor(point1 , point2 , point3 , point4){
        this.setpoint1(point1);
        this.setpoint2(point2);
        this.setpoint3(point3);
        this.setpoint4(point4);
    }
    //we use it direct becuase we dont have another classes just one class 
    #checkInstanceOf(point){
        if(!(point instanceof Point)){
            throw new Error ('instance error');
        }
    }
    
    setpoint1(point1){
        this.#checkInstanceOf(point1);
        this.#point1 = point1;
    }
    setpoint2(point2){
        this.#checkInstanceOf(point2);
        this.#point2 = point2;
    }
    setpoint3(point3){
        this.#checkInstanceOf(point3);
        this.#point3 = point3;
    }
    setpoint4( point4){
        this.#point4 = point4;
    }
    getpoint1(){
        return this.#point1;
    }
    getpoint2(){
        return this.#point2;
    }
    getpoint3(){
        return this.#point3;
    }
    getpoint4(){
        return this.#point4;
    }
    isValid(){
        const distance1 =  this.#point1.distance(this.#point2);
        const distance2 = this.#point1.distance(this.#point3);
        const distance3 =  this.#point2.distance(this.#point4);
        const distance4 = this.#point3.distance(this.#point4);
        if(distance1 === distance2 && distance1 ===distance3 &&distance1 ===distance4){
            return true;
        }
        return false;
    }
    area(){
        if(this.isValid()){
            const distance1 =this.#point1.distance(this.#point2);
            return distance1*distance1;
        } 
        throw new Error ('not valid points')
    }
}

    function bootstrap(){
                        
        const point1 = new Point(10 ,20);
        const point2 = new Point(20 ,20);
        const point3 = new Point(10 ,10);
        const point4 = new Point(20 ,10);
        const square = new Square(point1 , point2 , point3 , point4);


        console.log(square.getpoint1().gety());      
        if(square.isValid()){
        console.log(`area of square :${square.area()}`);
        }else{
        throw new Error('not valid square');
        }
    }
    // }
    bootstrap();


