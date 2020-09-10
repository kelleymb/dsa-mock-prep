//write an algorithm that calculates the 
//sum of all the numbers in an array
function sumOf(arr) {
    //base case- when to stop
    if (arr.length === 1) {
        return arr[0];
    }
    //general/recursive case- function calls itself
    //slice starts each array at index 1, and recursively
    //iterates through the array
    return arr[0] + sumOf(arr.slice(1));
}

//write a recursive function that counts how many sheep jump
//over the fence. your program should take a number as input.
//that number should be the number of sheep you have. display
//the number along with the message 'Another sheep jumps over the fence'
//until no more sheep are left
let input = 3;

function countSheep(input) {
    //base case
    // 'All sheep jumped over the fence'
    // if input is 0- there are no sheep left
    if (input === 0) {
        return input + 'All sheep jumped over the fence.';
    }
    //general/recursive case
    // call stack of sheep from 3 - 1
    return 'Another sheep jumps over the fence.' + countSheep(input - 1);
}

//write a function called powerCalculator that takes two parameters
//an integer as a base, and another integer as an exponent
//returns the value of the base raised to the power of the exponent
function powerCalculator(base, exponent) {
    //edge case
    //only pos. numbers, if negative return exponent should be >= 0
    if (exponent < 0) {
        return 'Exponent should be greater than or equal to 0';
    }
    //base case
    if (exponent === 1) {
        return base;
    }
    //general case
    //call powerCalculator down the call stack
    return base * powerCalculator(base, exponent - 1);
}

//write a function that reverses a string
//take a string as input, reverse the string, return new string
function reverseString(string) {
    //base case
    if (string.length === 1) {
        return string;
    }
    //general case
    return reverseString(string.slice(1)) + string.charAt(0);
}

/*Calculate the nth triangular number. A triangular number counts the objects that 
can form an equilateral triangle. The nth triangular number is the number of dots composing 
a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.*/
function nthTriangular(input) {
    //base case
    if (input === 1) {
        return 1;
    }
    //general case
    return input + nthTriangular(input - 1);
}

//INCOMPLETE
/*Write a recursive function that splits a string based on a separator (similar to 
String.prototype.split). Don't use JS array's split function to solve this problem.*/
function stringSplitter(string) {
    //base case
    if (string.length === 1) {
        return string;
    }
    //general case
    return stringSplitter();
}

/*Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is the sum of 
the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.*/
function fib(input) {
    if (input <= 0) {
        return 'Input must be greater than 0.';
    }
    if (input === 1) {
        return 1;
    }
    if (input === 2) {
        return 1;
    }
    return fib(input - 1) + fib(input - 2);
}

/*Write a recursive function that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each 
number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.*/
function factorial(num) {
    //base case
    if (num === 1) {
        return 1;
    }
    //general case
    return num * factorial(num -1);
}