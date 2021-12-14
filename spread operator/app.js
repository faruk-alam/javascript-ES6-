// Copy Array Using Spread Operator-
let arr1 = ["one","two"];
let arr2 = [... arr1,"three","four","five"];
console.log(arr2);

//Clone Array Using Spread Operator
let arr3 = [ 1, 2, 3];
//let arr4 = arr3;
let arr4 = [... arr3];

console.log(arr3); // [1, 2, 3]
console.log(arr4); // [1, 2, 3]

// append an item to the array
arr3.push(4);

console.log(arr3); // [1, 2, 3, 4]
console.log(arr4); // [1, 2, 3, 4]

//Spread Operator with Object
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}

//Spread Operator with function
function addNumbers(a, b, c) {
    return a + b + c;
}

let numbers = [5, 12, 8];
console.log(addNumbers(...numbers));