const HashMap = require('./hashmap');

//Implement a function to delete all duplicated 
///characters in a string and keep only the first 
//occurrence of each character.

function removeDuplicates(string) {
    //create a new HashMap
    let hash_map = new HashMap(string);
    //create a new string
    let newStr = '';
    //iterate through the string
    //split the string, create char
    string.split('').forEach(char => {
        //if hash_map has a character
        if (!hash_map.has(char)) {
            //set that char to empty string
            hash_map.set(char, '');
            //add the char to the new str
            newStr += char;
        }
    })
    return newStr;
}

//Write an algorithm to check whether any 
//anagram of some string is a palindrome.
function palindrome(string) {
    const result = new HashMap();
    for (let i = 0; i < string.length; i++) {
        if (!result.delete(string[i])) {
            result.set(string[i], 1);
        }
    }
    if (result.size <= 1) {
        return true;
    }
    return false;
}


//Write an algorithm to group a list of words into anagrams.
// function groupAnagram(string) {
//     const result = new HashMap();

// }
