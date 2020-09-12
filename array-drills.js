//URLify a string
function urlifyString(str) {
    //use trim to remove whitespace
    str = str.trim();
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            output += '%20';
        } else {
            output += str[i]
        }
    }
    return output;
}

//filter array, remove all numbers less than 5
function filterArray(arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}

//You are given an array containing positive and negative 
//integers. Write an algorithm which will find the largest 
//sum in a continuous sequence.
function maxSum(arr){
    //loop through adding 2 integers
    //then loop through 3 integers...etc
    //each time compare the sum with the existing max sum. replace if higher
    let max = 0;
    for (let i  = 2; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            let sum = 0;
            for (let k = 0; k < i; k++) {
                //j+0, j+1 ...etc
                if ( j + k < arr.length){ 
                    sum += arr[j + k];
                }
            }
            if(sum > max){
                max = sum;
            }
        }
    }
    return max;
}

//Write an algorithm to merge the 2 arrays 
//into a single array, which should also be sorted.
function mergeArrays(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
    let index = 0;

    while (newArr.length !== (arr1.length + arr2.length) - 1) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[i]);
            j++;
        }
    }
    return newArr;
}

//Write an algorithm that deletes given characters from a string.
function removeChar(str) {
    //edge case
    if (str.length === 0) {
        return;
    } 
    let newStr = '';
    let remChar = 'a' || 'e' || 'i' || 'o' || 'u' ;   
    for (let i = 0; i < str.length; i++) {
        if (str[i] === remChar) {
            newStr = str.replace(remChar, '');
        }   
    }
    return newStr;
}

//Given an array of numbers, write an algorithm that outputs 
// an array where each index is the product of all the numbers 
// in the input array except for the number at each current index.
function productOfArray() {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
//THIS DOES NOT SATISFY REQUIREMENTS, current index is included in product of array

//working?
function arrayProduct(arr) {
    const product = arr.map((num, i) => {
        const otherNums = arr.slice(0, i).concat(arr.slice((i + 1), (arr.length)))
        return otherNums.reduce((acc, cur) => acc * cur)
    })
    return product
}

//2D array, replace with 0s
function array2D(arr) {
    const originalArr = JSON.parse(JSON.stringify(arr));
    let newArr = arr;

    originalArr.map((row, rowI) => {
        row.map((item, arrI) => {
            if (item === 0) {
                newArr[rowI].forEach((num, i) => newArr[rowI][i] = 0);
                newArr.forEach(newRow => newRow[arrI] = 0);
            }
        })
    })
    console.log(newArr);
    return newArr;
}
