// Rrmove all teh duplicates in the array

// sa zicem ca avem un array de genul 

arr = [1, 1, 2, 2, 3];

// BEST IMPLEMENTATION

const uniqueArr = arr => {
    return [...new Set(arr)];
}

console.log(arr);
console.log(uniqueArr(arr));


// SOL 2

// const uniqueArr = arr => {
//     const result = [];
//     arr.forEach(item => {
//         if (!result.includes(item)) {
//             result.push(item);
//         }
//     });
//     return result;
// };

// console.log(arr);
// console.log(uniqueArr(arr));


// SOL 3

// const uniqueArr = arr =>  {
//     return arr.reduce((acc, el) => {
//         return acc.includes(el) ? acc : [...acc, el];
//     }, []);
// };

// console.log(arr);
// console.log(uniqueArr(arr));