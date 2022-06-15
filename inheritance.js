class Vehicle { // parent class
    capacity;
    numberOfDoor;
    price;
    color;

    constructor(capacity, numberOfDoor, price, color) {
        this.capacity = capacity;
        this.numberOfDoor = numberOfDoor;
        this.price = price;
        this.color = color;
    }

    getPrice() {
        return this.price;
    }

    getVehicleType() {
        return 'it\'s Vehicle type';
    }

    getCapacity() {
        return this.capacity;
    }

    getNumberOfDoor() {
        return this.numberOfDoor;
    }

    getPrice() {
        return this.price;
    }

    getColor() {
        return this.color;
    }
}

class Car extends Vehicle {
    roofDoor;
    constructor(capacity, numberOfDoor, price, color, roofDoor) {
        super(capacity, numberOfDoor, price, color);
        this.roofDoor = roofDoor;
    }

    getPrice() {
        let finalPrice = this.price;
        if (this.color === 'red') {
            finalPrice += 10000;
        }
        return finalPrice + (this.numberOfDoor * 200);
    }

    getVehicleType() {// function overwrite
        return 'it\'s car type';
    }

    getRoofDoor() {
        return this.roofDoor;
    }
}

class Bus extends Vehicle {
    doorSteps;
    constructor(capacity, numberOfDoor, price, color, doorSteps) {
        super(capacity, numberOfDoor, price, color);
        this.doorSteps = doorSteps;
    }

    getPrice() {
        return finalPrice + (this.capacity * 50);
    }

    getDoorSteps() {
        return this.doorSteps;
    }
    getVehicleType() {// function overwrite
        return 'it\'s bus type';
    }
}

// Bus is a Vehicle => true
// person is a Vehicle => false

const car1 = new Car(4, 4, 50000, 'red', true);
console.log(car1.getCapacity());
console.log(car1.getColor());
console.log(car1.getRoofDoor());
console.log(car1.getVehicleType());

const Bus1 = new Bus( 5, 9 , 1000000,'black' ,true);
console.log(Bus1.getCapacity());
console.log(Bus1.getVehicleType());


// class Processor {
//     apply();
// }

// class newStudentRegistrationProcessor extends Processor {
//     apply() {

//     }
// }

// class newParentRegistrationProcessor extends Processor {
//     apply() {

//     }
// }