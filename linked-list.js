class _Node {
    constructor(val, next) {
        //node value
        this.val = val;
        //pointer
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        //empty list, represented by null
        //head is the first node in the list
        this.head = null;
    }
    //time complexity: O(1)
    insertFirst(item) {
        //insert at the beginning of the list
        //head is null, created a new node instance
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        //if the head is null, insert the first item
        if (this.head === null) {
            //function call to insertFirst()
            this.insertFirst(item);
        } else {
            //else assign tempNode to this.head
            let tempNode = this.head;
            //if next node to the head is null, tempNode is tempNode.next
            while (tempNode.next !== null) {
                //set tempNode to the next node
                tempNode = tempNode.next;
            }
            //else create a new node, with the next pointer at null
            tempNode.next = new _Node(item, null)
        }
    }
    insertBefore(newItem, beforeItem) {
        //if the head is null, insert first item
        if (this.head === null) {
            this.insertFirst(item);
            return;
        }

        let currNode = this.head;
        let prevNode = this.head;

        while (currNode !== null && currNode.val !== beforeItem) {
            prevNode = currNode;
            //continue searching
            currNode = currNode.next;
        }

        if (currNode === null) {
            this.insertLast(newItem);
            return;
        }

        const tempNode = new _Node(newItem, currNode);

        prevNode.next = tempNode
    }
    insertAfter(newItem, afterItem) {
        if (this.head === null) {
            this.insertFirst(newItem);
            return;
        }

        let currNode = this.find(afterItem);

        if (currNode === null) {
            this.insertLast(newItem)
            return;
        }

        const tempNode = new _Node(newItem, currNode.next);

        currNode.next = tempNode;
    }
    insertAt(item, position) {
        if (this.head === null) {
            this.insertFirst(newItem);
            return;
        }
        //start at the head
        let currNode = this.head;
        //position of the head is 1st in the list
        let currPosition = 1;

        while (currPosition < position - 1) {
            //continue searching
            currNode = currNode.next;
            //increment position
            currPosition++;
        }

        const tempNode = new _Node(item, currNode.next);

        currNode.next = tempNode;
    }
    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        //check for the item
        while (currNode.value !== item) {
            //return null if its the end of the list
            //and the item is not on the list
            if (currNode.next === null) {
                return null;
            } else {
                //continue searching
                currNode = currNode.next;
            }
        }
        //located
        return currNode;
    }
    remove(item) {
        if (!this.head) {
            return null;
        }
        //if the node to be removed is the head
        //make the next node the head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //start at head of list
        let currNode = this.head;
        //keep track of previous node
        let prevNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            //save the previous node
            prevNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found.');
            return;
        }
        prevNode.next = currNode.next;
    }
}
