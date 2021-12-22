var students = [
    {
        id: 101,
        name : "Alexandro",
        cgpa : 3.57
    },
    {
        id: 102,
        name : "Jack",
        cgpa : 4.70
    },
    {
        id: 103,
        name : "franco",
        cgpa : 2.17
    },
    {
        id: 104,
        name : "Serena",
        cgpa : 5.00
    },
    {
        id: 105,
        name: "Alberto",
        cgpa : 4.50
    },
]

// function studentNames(){
//     students.filter(function(x){
//        return x.cgpa > 4;
//     }).map(function(y){
//         return y.name;
//     });
// }
// //console.log(studentNames())
const studentNames = () => students.filter((x) => x.cgpa > 4).map((y) => y.name);