function fibRec(n) {
    if(n <= 0) {
        return [];
    } else if(n == 1) {
        return [0];
    } else if(n == 2) {
        return [0, 1]; 
    } else {
        array = fibRec(n - 1);
        array.push(array[array.length - 1] + array[array.length - 2]);
    }
    return array;
}
console.log(fibRec(8));