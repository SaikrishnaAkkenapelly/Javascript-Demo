//functions, arrays, etc.. are all considered as objects
//all things which are not primitive data types are considered as objects in javascript

//Array is constructor function means a class in java
let marks = new Array();
// with intialization
//marks = [] or marks = [1,2,3]

marks.push(18);
//push will return the length of the array after pushing
console.log(marks.push(36));
marks.push(48);

console.log(marks);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

marks[1] = 21;

console.log(marks);

//array in java script can store heterogenious data as well
marks = [];
marks = [12,function(){return 45},"Absent",{science : 54,social : 67}];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3].science);

//pop will return the element popped ie last element same as stack
console.log(marks.pop());

//shift is like dequeue for a queue but here in array
//this method will return the element removed.
console.log(marks.shift());
console.log(marks);

//unshift
//will insert the element at the start and return the new length after insertion
console.log(marks.unshift(12));
console.log(marks);

//splice is a method to delete element in array it has many functionalities better to see documentation
//delete 2 elements from the array from the index 2
marks.splice(1,2);

console.log("after splicing",marks);
// can also be used to add simultanously after deleting
marks.splice(1,1,68);

console.log("After splicing second time then adding simultaniously", marks);