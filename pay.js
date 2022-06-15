class abstractOrderSender {
    constructor() {
        if (new.target === abstractOrderSender) {
            throw new Error('cant make instance from abstract class');
        }
    }
    send() { }

}
class abstractPaymentOrderWay {
    constructor() {
        if (new.target === abstractPaymentOrderWay) {
            throw new Error('cant make instance from abstract class');
        }
    }
    pay() { }

}
class Motorcycle extends abstractOrderSender {
    // version;
    // constructor(version) {
    //     this.version = version;
    // }
    send() {
        console.log('motorcycle send the Product');
    }
}

class Car extends abstractOrderSender {
    send() {
        console.log('car send the Product');
    }
}

class Drone extends abstractOrderSender {
    send() {
        console.log('Drone send the Product');
    }
}
class PayByPayPal extends abstractPaymentOrderWay {
    // version;
    // constructor(version) {
    //     this.version = version;
    // }
    pay() {
        console.log('pay with paypal');
    }
}

class PayByVisa extends abstractPaymentOrderWay {
    pay() {
        console.log('pay with visa');
    }
}


class Order {
    orderSender;
    orderPayment;
    constructor(orderSender , orderPayment) {
        this.orderSender = orderSender;
        this.orderPayment = orderPayment;
    }

    delivery() {
        this.orderSender.send();
        this.orderPayment.pay();
       // this.orderPayment.pay();
    }
}

const newMotorcycle = new Motorcycle();
const newPayByPayPal1 = new PayByPayPal();
const newOrder = new Order(newMotorcycle , newPayByPayPal1 );
newOrder.delivery();

const newCar = new Car();
const newPayWithVisa1 = new Drone();
const newOrder2 = new Order(newCar,newPayWithVisa1);
newOrder2.delivery();
