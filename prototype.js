// function Shape(width , hieght) {
// 	this.width = width;
//     this.hieght = hieght;
// 	};

    function Rectangle(width, hieght) {
        this.width = width;
        this.hieght = hieght;

        area(()=>{
            let area = width * hieght;
            return area ;
        })
    }

    function Cirle(radius){
        this.radis = radius;

        this.area(() =>{
            return reduis**2 *3.14

        })
    }
    const rectangle1 = new Rectangle(10 ,20);
    rectangle1.width;

