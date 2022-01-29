// primitive type --> all execpt object
//string
let userName = "Saikrishna";
console.log(userName);
console.log(userName.length); //calculates the length of string
console.log(typeof userName);

//single quote inside string --> vice versa for double quote inside string as well
userName = "Saikrishna's demo code";
console.log(userName);
console.log(typeof userName);
//escape character to ecpape special features of the next symbol
userName = "Saikrishna's \"demo code\"";
console.log(userName);
console.log(typeof userName);

//concatination -> use + operator
let place = "India";
console.log(userName+" "+place);

//number -> single datatype that supports all type of numbers
let value = 5;
console.log(value);
console.log(typeof value);
// addition use + operator 
value = 5 + 10;
console.log(value);
console.log(typeof value);

//Infinity
value = 5/0;
console.log(value);
console.log(typeof value);
//-Infinity
value = -5/0;
console.log(value);
console.log(typeof value);
//floating point number
value = 4.6;
console.log(value);
console.log(typeof value);
//hexadecimal
value = 0xf;
console.log(value); //prints 15
console.log(typeof value);
//exponential
value = 2e2;
console.log(value);
console.log(typeof value);
//maximum value of number
console.log(Number.MAX_VALUE);
//minimum value of number
console.log(Number.MIN_VALUE);
//NaN -> number
let temp = 3 * "Saikrishna";
console.log(temp); // prints NaN which is of number datatype

//bigint
let population = 12332112332112332143434343n;
console.log(population);
console.log(typeof population);

//boolean
let developerYn = true;
console.log(developerYn);
console.log(typeof developerYn);
//boolean
let isGreater = 10 > 4;
console.log(isGreater);
console.log(typeof isGreater);

//undefined
let fullName;
console.log(fullName);
console.log(typeof fullName);

//null
let salary = null;
console.log(salary);
console.log(typeof salary);

//object
let fruits = ["Apple", "Banana","Orange"];
console.log(fruits);
console.log(typeof fruits);

//object 
let student = { name : "sai"}
console.log(student);
console.log(student.name);
console.log(typeof student);