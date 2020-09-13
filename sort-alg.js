//BUBBLE SORT
//loop through an array to find if the adjacent values need swapping
//continue searching the array until there are no more values
//that need to be swapped

//best case --> O(n)
//worst case --> O(n^2)

//swaps the values at two indices in the array
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};
//looks through adjacent pairs of values 
//if values are in the wrong order, it swaps them
//around and increases the swap counter
function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};


//MERGE SORT
//divide and conquer approach
//breaks the array into smaller chunks, 
//merges them back into correct order
//slice the array into 2 halves and sort each half 
//by recursively calling mergeSort

//Best, avg, worst case --> O(nlog(n))
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};


//QUICK SORT
//divide and conquer approach
//partition the array into 2 halves around a pivot value
//less than pivot --> one half of the array
//greater than pivot --> the other half of the array
//recursively sort the 2 halves of teh array until the 
//halves are of length 0 or 1

//best and avg case --> O(nlog(n))
//worst case --> O(n^2)
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};