
class Point {
    x;
    y;

    constructor(x , y){
        this.setX(x);
        this.setY(y);
    }
    setX(Xvalue){
        this.x = Xvalue;
    }
    setY(Yvalue){
        this.y = Yvalue;
    }
    distance(point){
        return Math.sqrt((this.x - point.x) **2 + (this.y - point.y)**2)

    }
}
const point1 = new Point(10 , 20);
const point2 = new Point(30 , 40);
console.log(point1.distance(point2));

