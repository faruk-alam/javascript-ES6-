// var num = [2,3,4,5,6];
// var sqrnum = num.map(function(x){
//     return x * x;
// });
// console.log(sqrnum);

var number = [43,87,9,12,6,32,11,5,8,99,105,65];
var newnum = number.filter(function(x){
    return x > 10;
})
console.log(newnum);
