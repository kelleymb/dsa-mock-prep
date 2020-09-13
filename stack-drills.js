const Stack = require("./stack");

//is the item in the stack a palindrome?
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z-0-9]/g, "");
    //your code goes here
    let palStack = new Stack();
    let splitStr = s.split(' ');
    let stackLength = splitStr.length;
    let results = '';

    splitStr.forEach(char => {
        palStack.push(char)
    })

    for (let i = stackLength; i > 0; i--) {
        results += palStack.pop()
    }
    return s === results;
}

//matching parentheses
function matchParans(str) {
    const newStack = new Stack();
    
    if (!str) {
        return null;
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ')') {
            newStack.push(str[i]);
        }
        if (str[i] === '(') {
            if (newStack.pop(str[i])) return false;
        }
    }
    return newStack.top === null;
}

//sort stack
function sortStack(stack) {
    if (!stack.top.next) {
        return stack;
    }
    display(stack);
    let sortStack = new Stack();
    while (stack.top) {
        let temp = stack.pop();
        while (sortStack.top && sortStack.top.data > temp) {
            stack.push(sortStack.pop())
        }
        sortStack.push(temp)
    }
    display(sortStack)
    return sortStack;
}