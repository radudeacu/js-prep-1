// Write a function which gets an array and an element and returns an array with this ellement at the end.

const numbers = [1,2];
const append = (arr, el) => {
    return [...arr, el];
    // arr.push(el); don't use push caz it modifies the original array
    return arr;
}

const newNumbers = append(numbers, 3);
console.log(newNumbers);
console.log(numbers);