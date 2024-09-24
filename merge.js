const unsortedArr = [3, 2, 1, 13, 8, 5, 0, 1];

function merge(arr1, arr2) {
    let sortedArray = [];

    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            sortedArray.push(arr1.shift());
        } else {
            sortedArray.push(arr2.shift());
        }
    }
    return sortedArray.concat(arr1.slice().concat(arr2.slice()));
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));

    return merge(left, right);
}

console.log(mergeSort(unsortedArr));