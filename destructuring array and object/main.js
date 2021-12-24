//destructuring from array
let fruit1 = ["apple", "banana", "orange", "mango","peach"];
let [a,b,c,d,e] = fruit1;
console.log(b);
console.log(d);
// using spread operator
let fruit2 = ["apple", "banana", "orange", "mango","peach"];
let [x,y,...z] = fruit2;
console.log(x);
console.log(z);

//destructuring from object
const person = {
    nami: 'Sara',
    age: 25,
    gender: 'female'    
}
let {nami, age,gender} = person;
console.log(nami);

// nested destructuring 
const student = {
    nam: 'Jack',
    age: 26,
    hobbies: {
        first: 'coding',
        sceond: "song"
    }
}
const {nam, hobbies: {first,sceond}} = student;
console.log(nam);
console.log(first);

// Swapping Variables
let m = 4;
let n = 7;

[m, n] = [n, m];

console.log(m); // 7
console.log(n); // 4




