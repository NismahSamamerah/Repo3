const queue = {
    items: [],
    isEmpty: function () {
        return !this.items.length
    },
    inQueue: function (number) { // push
        this.items.push(number);
    },
    deQueue: function () { // pop
        const element = this.items.shift();
        return element;
    },
    clear: function () {

    },
    size: function () {

    },
    search: function () {

    },
    getQueue: function () {
        return this.items;
    },
    rear: function () {

    },
    sort: function () {

    },
    isFull: function() {

    }
};

queue.inQueue(10);
queue.inQueue(20);
queue.inQueue(30);
console.log(queue.getQueue());
console.log(queue.deQueue());
console.log(queue.getQueue());