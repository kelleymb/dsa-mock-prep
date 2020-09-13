//height of a bst
function height(bst) {
    if (!bst) {
        return 0;
    } else {
        //traverse through left and right nodes until you reach null
        if (bst.left && !bst.right) {
            //add one to the height
            return 1 + height(bst.left);
        } else if (!bst.left && bst.right) {
            //add one to the height
            return 1 + height(bst.right);
        } else if (!bst.right && bst.left) {
            //return 1 as the height
            return 1;
        } else {
            return 1 + max(height(bst.left), height(bst.right));
        }
    }
}

function max(a ,b) {
    if (a > b) {
        return a;
    }
    return b;
}

//is it a BST?
function isAValidBst(bst) {
    if (!bst.left && !bst.right) {
        return true;
    }
    //if there is a left
    if (bst.left) {
        //if left is greater, its not a BST
        if (bst.left.key > bst.key) {
            return false;
        }
        return isAValidBst(bst.left);
    }
    if (bst.right) {
        //if right is less, its not a BST
        if (bst.right.key < bst.key) {
            return false;
        }
        return isAValidBst(bst.right);
    }
}

//3rd largest node in a BST
function thirdLargest(bst) {
    const height = height(bst);
    if (height < 2) {
        return null;
    } else if (height < 3) {
        if (bst.left && bst.right) {
            return bst.left.value;
        } else {
            return null;
        }
    } else if (height > 3) {
        return thirdLargest(tree.right);
    } else {
        return bst.key;
    }
}

//is a BST balanced?
function isBalanced(bst) {
    if (!bst) {
        return false;
    }
    if (!bst.right && !bst.left) {
        return true;
    }
    if (Math.abs(height(bst.right) - height(bst.left)) > 1) {
        return false;
    }
    return true;
}