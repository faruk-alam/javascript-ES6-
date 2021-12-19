const student = {
    name: 'Monica',
    class: 7,
    age: 12
}
//Accessing properties key name-
for ( let key in student ) {
    console.log(key);
    //Accessing properties key value-
    console.log(student[key]);
    //Accessing properties key name and value-
    console.log(`${key}: ${student[key]}`);

}

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

