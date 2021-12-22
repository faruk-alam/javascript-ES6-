// // traditional function
// function greet(){
//     console.log("Hey!there")
// }
// greet();
// const greet2 = () =>{
//     console.log("Hey!there,how are you")
// }
// greet2();
// // Can be skipped the parentheses i.e. () in case when there is exactly one parameter.
// const greet3 = name =>
//     console.log("hi "+ name +" Whats up?");
// greet3("jack");
// single parameter,multi statement 
// var test = age => {
//     if(age>18){
//         console.log("Adult");
//     }
//     else{
//         console.log("Minor");
    
// }
// }
// test(66);
// returning value in multi parameter and argument ,single statement .
// traditional
// function sum(a,b){
//     return a + b;
// }
// console.log(sum(1,2));
// const sum = (a, b) =>{
//     return a + b;
// }
// console.log(sum(10,15));
// by removing return keyword and curly braces
const sum = (a, b) => a + b;
console.log(sum(50,100));
// more than one expression in the function body,need to wrap it braces ({}).
var divide = (x, y) => {
    if(y != 0) {
        return x / y;
    }
}
console.log(divide(10, 2)); 