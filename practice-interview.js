//1. Find the max value in an array
function maxValue(array) {
    //edge case
    //if array has no length, return null
    if (array.length === 0) {
        return null;
    }
    //set current max to index 0 of the array
    let currentMax = array[0];
    //loop through the array
    for (let i = 0; i < array.length; i++) {
        //set item to array index
        let item = array[i];
        //if the array index is greater than the current max of array[0]
        //set currentMax to equal the item
        if (item > currentMax) {
            currentMax = item;
        }
    }
    //return current max
    return currentMax;
}

//find the min value in an array 
function minValue(array) {
    //edge case
    if (array.length === 0) {
        return null;
    }
    let currentMin = array[0];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item < currentMin) {
            currentMin = item;
        }
    }
    return currentMin;
}

//2. Find the most common letter in a string
function commonLetter(string) {
    //edge case
    if (string.length === 0) {
        return null;
    }
    //initialize count object
    let freqCount = {};
    //loop through the string
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (freqCount[letter]) {
            freqCount[letter]++;
        } else {
            freqCount[letter] = 1;
        }
    }
    return freqCount;
}

//3. Given a document, implement an algorithm to count the number of word occurences
//- Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
//- Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

//NAIVE APPROACH
function wordCount(string) {
    //edge case
    if (string.length === 0) {
        return null;
    }
    //initialize count object
    let freqCount = {};
    //loop through string
    for (let i = 0; i < string.length; i++) {
        let words = string.split(' ');
        words.forEach((word) => {
            if (freqCount.hasOwnProperty(word)) {
                freqCount[word] = 0;
            }
           freqCount[word] += 1; 
        })
        
    }
    //return count object
    return freqCount;
}

//SIMPLER APPROACH
function wordCount(string) {
    count = {};
    words = string.split(' ');
    words.forEach((word) => {
        if (count[word]) {
            count[word] +=1;
        } else {
            count[word] = 1;
        }
    })
    return count;
}

wordCount('hello there this is an array');

//4. Given a sorted linked list, write an algorithm to delete all duplicate numbers
//from the sorted linked list
function removeDuplicates(head) {
    let current = head;
    //edge case
    if (!head || !head.next) {
        return head;
    }
    while (current && current.next) {
        if (current.val = current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next;
        }

    }
    return head;
}


//5. Given a string, write an algorithm to count the number of words in the string
//that are palindromes. The output must include a list of the palindromes and the
//number of palindromes
// - Input: `"Dad gave mom a Tesla as a racecar"`
// - Output: `Dad, mom, racecar, 3 Palindromes`
function countPalindrome(str) {
    if (str.length === 0) {
        return null;
    }
    let freq = {};
    let count = 0;
    let pal = str.split(' ').reverse().join();
    if (freq[pal]) {
      freq[pal]++;
    } else {
        freq[pal] = 1;
    }
    if (count < freq[pal]) {
       count = freq[pal];
       console.log(`${count} Palindrome(s).`)
    }
    return freq;
}

countPalindrome('mom')
countPalindrome('tacocat')

//6. Given 2 linked lists, where each node in each linked list represents a character
//in a string, write a function compare() that compares the 2 strings
//returns 0 if both strings are the same, returns 1 if the 1st linked list is 
//lexicographically greater, and return -1 if the 2nd string is lexicographically greater
// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
// - Output: `1`

// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
// - Output: `-1`

//WHAT ARE THE POSSIBILITIES
//*ORDER IN WHICH THEY OCCUR*
function compare(lL1, lL2) {
    //edge case
    if (lL1.length === 0 && lL2.length === 0) {
        return null;
    }
    let currentA = lL1;
    let currentB = lL2;
    //whichever is longer
    let next = lL1.next || lL2.next;
    //traverse through each LL (going through each node in their LL)
    while (next) {
        if (currentA.val > currentB.val) {
            return 1;
            // return lL1;
        } else if (currentA.val < currentB.val) {
            return -1;
            // return lL2;
        } else {
            currentA = currentA.next
            currentB = currentB.next
            next = next.next;
        }
    }
    //if they're the same return either list, it doesn't matter
    // return lL1;
    return 0;
}


//7.Given a list of integers find the mode and the frequency of the mode
//the mode in a list of numbers is the value that occurs the most often
//if no number in the list is repeated, then there is no mode for the list
// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`
function findMode(arr) {
    //edge case
    if (arr.length === 0) {
        return null;
    }
    let mode = {};
    let max = 0;
    let count = 0;
    arr.forEach((e) => {
        if (mode[e]) {
            mode[e]++;
        } else {
            mode[e] = 1;
        }
        if (count < mode[e]) {
            max = e;
            count = mode[e];
        }
    });
    return `Mode: ${max} Frequency: ${count}`;
}

findMode([2,2,2,3,4,6]);