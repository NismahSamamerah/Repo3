// Shape
//     color (string)
//     filled (boolean (true, false))
//     function
//         setter, getter
//         area (throw new Error('function not implemented'))
// Rectangle inherit from Shape
//     width
//     hight
//     function
//         setter (make sure width, hight is non negative number and greeter then zero )
//         getter
//         overwrite area function to return the Rectangle area


// Circle inherit from Shape
//     radius
//     function
//     setter (make sure radius is non negative number and greeter then zero )
//     getter
//     overwrite area function to return the circle are

class Shape {
    color ; 
    filled ;
    #checkcolor(value){
        if(typeof value !== 'string'){
            throw new Error('color should be a string')
        }
    }
    #checkfilled(value){
        if(typeof value !=='boolean'){
            throw new Error ('filled should be a boolean')
        }
    }
    constructor(color , filled){
        this.setColor(color);
        this.setFilled(filled);
    }
    setColor(color){
        this.#checkcolor(color);
        this.color = color;
    }
    setFilled(filled){
        this.#checkfilled(filled);
        this.filled = filled;
    }
    getColor(){
        return this.color;
    }
    getFilled(){
        return this.filled;
    }
    area(){
        throw new Error ('function not implemented')
    }
}


class Rectangle extends Shape {
    width;
    hieght;

    constructor(color , filled , width , hieght){
        super(color , filled);
        this.setWidth(width);
        this.setHieght(hieght);
    }
    #checknumber(num){
        if(!(num >= 0)){
    throw new Error('number should be greater than 0');
    }
}
    setWidth(widthv){
        this.#checknumber(widthv);
        this.width = widthv;
    }
    setHieght(hieghtv){
        this.#checknumber(hieghtv);
        this.hieght = hieghtv;
    }
    getWidth(){
        return this.width;
    }
    gethieght(){
        return this.hieght;
    }
    area(){
        let RectangleArea = this.width * this.hieght
        return `rectangle area :${RectangleArea}`
    }

}

class Circle extends Shape{
    reduis;
    constructor(color , filled , reduis){
        super(color , filled);
        this.setReduis(reduis);
    }
    #checknumber(num){
        if(!(num >= 0)){
    throw new Error('number should be greater than 0')
    } 
}
    setReduis(reduisv){
        this.#checknumber(reduisv);
        this.reduis = reduisv;       
    }
    getReduis(){
        return this.reduis;
    }
    area(){
        let ReduisArea = this.reduis**2 *3.14;
        return `circle area : ${ReduisArea}`
    }
}
// const shape = new Shape('blue ' , false);
// console.log(shape.getColor());
const rectangle = new Rectangle('red', true , 20 ,20);
console.log(rectangle.getColor());
console.log(rectangle.getFilled());
console.log(rectangle.area());

// const circle = new Circle('red' , true , 10);
// console.log(circle.area());

// class Shape {
//     color ;
//     filled ;

//     constructor(color , filled){
//         this.setColor(color);
//         this.setFilled(filled);
//     }
//     setColor(colorvalue){
//         this.color = colorvalue;
//     }
//     getColor(){
//         return this.color;
//     }
//     setFilled(filledvalue){
//         this.filled = filledvalue;
//     }
//     getFilled(){
//         return this.filled;
//     }
//     area(){
//         throw new Error('function not implemented');
//     }
// }

// class Rectangle extends Shape {
//     width;
//     hight;

//     constructor(color , filled , width , hight){
//         super (color , filled);
//         this.setWidth(width);
//         this.setHieght(hight);       
//     }
// #checknumber(value){
//         if(!(typeof value === Number) && !(value > 0 )){
//             return true;
//         }
//         return false;
//     }
//     setWidth(widthvalue){
//         if(this.#checknumber(widthvalue)){
//             console.log('width should be greater than 0');
//         }
//         this.width = widthvalue;
//     }
//     getWidth(){
//         return this.width;
//     }
//     setHieght(hieghthvalue){
//         if(this.#checknumber(hieghthvalue)){
//             console.log('hieght should be greater than 0');
//         }
//         this.hight = hieghthvalue;
//     }
//     getHieght(){
//         return this.hight;
//     }

//     area(){
//         let RectangleArea = this.hight * this.width;
//         return RectangleArea;
//     }

// }

// class Circle extends Shape {
//     radius;

//     constructor(color , filled ,  radius){
//         super (color , filled);
//         this.setRedius(radius);     
//     }
// #checknumber(value){
//         if(!(typeof value === Number) && !(value > 0 )){
//             return true;
//         }
//         return false;
//     }
//     setRedius(rediusvalue){
//         if(this.#checknumber(rediusvalue)){
//             console.log('radius should be greater than 0');
//         }
//         this.radius =rediusvalue;
//     }
//     getRadius(){
//         return this.radius;
//     }

//     area(){
//         let CircleArea = (this.radius **2) *3.14;
//         return CircleArea;
//     }

// }


// const Rectangle1 = new Rectangle ('red',true ,100 , 190);
// const Circle1 = new Circle ('black' , false , 5)
// // console.log(Rectangle1.getColor());
// // console.log(Rectangle1.getHieght());
// // console.log(Rectangle1.getWidth());
// // console.log(Rectangle1.getFilled());
//  console.log(Circle1.getFilled());
//  console.log(Circle1.getColor());
//  console.log(Circle1.getRadius());
// console.log(` rectangle area :${Rectangle1.area()}`);
// console.log(` circle area :${Circle1.area()}`);



