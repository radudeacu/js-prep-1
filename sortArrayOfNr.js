// Sort the array of numbers


// Caz 

// const arr = [3, 5, 1];
// const result = arr.sort((a, b) => a - b);

// console.log(arr, result);


// Sort the array of objects by author's last name

const books = [
    {name: "Harry Potter", author: "Joanne Rowling"},
    {name: "Warcross", author: "Marie Lu"},
    {name: "The Hunger Games", author: "Suzanne Collins"},
];

books.sort((book1, book2) => {
    const authorLastName1 = book1.author.split(" ")[1];
    const authorLastName2 = book2.author.split(" ")[1];
    return authorLastName1 < authorLastName2 ? -1 : 1;
});

console.log(JSON.stringify(books));