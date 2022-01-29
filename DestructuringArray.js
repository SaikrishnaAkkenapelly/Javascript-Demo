let userNames = ["Saikrishna","Nikhil","Samanth"];
//regular way
let userName = userNames[0];
console.log(userName);
//destructuring
let [userName1,userName2,userName3] = userNames;

console.log(userName1);
console.log(userName2);
console.log(userName3);

//destructering to list as well "names"

let [name1,...names] = userNames;

console.log(name1);
console.log(names);

//swapping using destructering
let a = 1,b = 2;
//dynamically we created an array right side and we are destructering that array
[a,b] = [b,a]
console.log(a,b);