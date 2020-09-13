//LINEAR SEARCH
//you look through an array 1 by 1 until
//you find what you're looking for

//best case --> O(1)
//avg/worst case --> O(n)
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}


//BINARY SEARCH
//works only on sorted arrays
//dividing the range in half each time:
//divide and conquer approach

//best case --> O(1)
//avg/worst case --> O(log(n))
function binarySearch(array, value, start, end) {
    let start = start === undefined ? 0: start;
    let end = end === undefined ? array.length : end;
    
    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item == value) {
        return index;
    } else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    } else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
}


//SEARCHING & TRAVERSAL IN A TREE

//DEPTH-FIRST SEARCH (DFS)
// time complexity --> O(n)
dfs(values=[]) {
    if (this.left) {
        values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
}

//ORDERING:
//left branch is visited, then the node itself, then the right branch = In-Order Traversal
//node is handled before the branches = Pre-Order
//node is handled after the branches = Post-Order

//BREADTH-FIRST SEARCH (BFS)
// time complexity --> O(n)
bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array

        if (node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }
    }

    return values;
}