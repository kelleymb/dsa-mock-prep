class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        //start with an empty 1st node, represented by null and this
        //indicates the top of the stack
        this.top = null;
    }
    // Insertion:: push() --> places data on top of the stack
    // Time complexity: Constant O(1)
    push(data) {
        //if stack is empty, 
        //then the node will be on top of the stack
        if (this.top === null) {
            this.top = new Node(data, null);
            return this.top;
        }
        //if stack already has something, 
        //create a new node, add data to the node, 
        //pointer points to the top
        const node = new Node(data, this.top);
        this.top = node;
    }
    //Removal:: pop() --> removes data from the top of the stack
    // Time complexity: Constant O(1)
    pop() {
        if(!this.top) {
            return null;
        }
        //in order to remove top of stack, must point to the pointer 
        //to the next item and top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    //checks if stack is empty 
    isEmpty() {
        if (this.top === null) {
            return true;
        }
        return false;
    }
    //look at the top of the stack without removing it
    peek() {
        if (this.top === null) {
            return console.log('Stack is empty');
        }
        return console.log(this.top.data);
    }
    //display the stack, what is the 1st item?
    display() {
        if (this.top === null) {
            return console.log('Stack is empty');
        }
        let node = this.top;
        while (node.next !== null) {
            node = node.next;
        }
        console.log(node.data)
    }
}

module.exports = Stack;