// Write a function which can concatenate 2 arrays

const concatArrays = (arr1, arr2) => {
    // return arr1.concat(...arr2);
    // or
    return [...arr1, ...arr2];
};

const arr1 = [1];
const arr2= [3,4];
const result = concatArrays(arr1, arr2);
console.log(arr1, arr2, result);

