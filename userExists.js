// Check that user with such name exists in array of objects

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
    },
];

// SOlutie 1 worst impl but we go step by step

// ceva gen for (let i=0; i< users.length; i++) {}
//             if nume === users.name[i] return true;
//

// const nameExists = (name, users) => {
//     let exists = false;
//     for (let i =0; i < users.length; i++) {
//         if (users[i].name === name) {
//             exists = true;
//         }
//     }
//     return exists;
// };

// console.log(nameExists("John", users));

// SOLUTIE 2 BEST IMPLEMENTATION

const nameExists = (name, arr) => arr.some(el => el.name === name);

console.log(nameExists("John", users));


// SOLUTIE 3

// const nameExists = (name, arr) => {
//     const el = arr.find(el => el.name ===name);
//     return Boolean(el);
// };