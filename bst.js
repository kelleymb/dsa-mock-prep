class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
            //if the key is less, must be on left side of tree
        } else if (key < this.key) {
            if (this.left == null) {
                //pass 'this' as the parent
                this.left = new BinarySearchTree(key, value, this);
            } else {
                this.left.insert(key, value);
            }
        } else {
            //if the key is more, must be on the right side of the tree
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            } else {
                this.right.insert(key, value);
            }
        }
    }
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            } else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        } else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            } else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
    //best case --> O(1)
    //avg case --> O(log(n))
    //worst case --> O(n)
    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            } else if (this.left) {
                this._replaceWith(this.left);
            } else if (this.right) {
                this._replaceWith(this.right);
            } else {
                this._replaceWith(null);
            }
        } else if (key < this.key && this.left) {
            this.left.remove(key);
        } else if (key > this.key && this.right) {
            this.right.remove(key);
        } else {
            throw new Error('Key Error.')
        }
    }
    //best case --> O(1), root node
    //avg case --> O(log(n)), traverse the height of a balanced tree
    find(key) {
        //if item is found at root, return key
        if (this.key == key) {
            return this.value;
        //if the item is less than the root, follow left
        //recursively check it left/right until you find the item
        } else if (key < this.key & this.left) {
            return this.left.find(key);
        //if the item is more than the root, follow right
        //recursively check it left/right until you find the item
        } else if (key > this.key && this.right) {
            return this.right.find(key);
        } else {
        //you have the searched the tree, item is not found, throw error
            throw new Error('Key Error.')
        }
    }
}

module.exports = BinarySearchTree;