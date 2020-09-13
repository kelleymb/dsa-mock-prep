class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    //create a constructor containing the 1st and the last nodes
    //indicating the beginning and the ending of the queue
    constructor() {
        this.first = null;
        this.last = null;
    }
    //Insertion:: enqueue(data) adds data to a queue
    // Time complexity: Constant O(1),  adding items in only 1 place
    enqueue(data) {
        const node = new Node(data);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }
    //Removal:: dequeue() removes the oldest data added to a queue (deletion)
    // Time complexity: Constant O(1), removing items in only 1 place
    dequeue() {
        //if the queue is empty, nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;

        //if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
    isEmpty() {
        if (this.first === null) {
            return true;
        }
        return false;
    }
    peek() {
        if (this.first === null) {
            return console.log('Queue is Empty');
        }
        return console.log(this.first.data)
    }
    display() {
        if (this.first === null) {
            return console.log('Queue is Empty');
        }
        let node = this.first;
        while (node.next !== null) {
            node = node.next;
        }
        console.log(node.data)
    }
}

module.exports = Queue;