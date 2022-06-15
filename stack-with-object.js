
const objclock = {
    items: [],
    push(value){
        this.items.push(value);
    },
    pop(){
        this.items.pop();
    },
    print(){
        console.table(this.items);
    }
}



class Clock {
    seconds = 0;
    minutes = 0;
    hours = 0;

    constructor(s,m,h){
        this.seconds = s;
        this.minutes = m;
        this.hours = h;
    }
    
    setHours(h){
        this.hours = h;
    }
    
    print(){
        console.log(this.seconds, this.minutes, this.hours);
    }

}



const myClock = new Clock(14,37,42);
const myClock2 = new Clock(14,37,43);
myClock.print();
myClock2.print();
