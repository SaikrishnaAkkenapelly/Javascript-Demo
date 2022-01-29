let pens = 12;
let books = 10;

console.log(pens + books);
console.log(pens - books);
console.log(pens * books);
console.log(pens / books);
console.log(pens % books);

//pre increment similarly pre decrement as well
let count = ++pens;
console.log(count,pens); // 13,13

//post increment similarly post decrement as well
count = pens++;
console.log(count,pens); // 13,14

//power
console.log(pens ** books)
console.log(Math.pow(pens,books))

//boolean addition
pens = true;
books = true;

console.log(pens + books); // 2 true is considered as 1 and false as 0