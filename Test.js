//this file is to test any concept whenever you get a doubt
let printPromise = new Promise((resolve,reject) =>
{
  console.log("Printing..");  //1
  resolve();
});

function sayHello()
{
  console.log("Hello");
}

printPromise.then(sayHello);  //3

console.log("Saikrishna");  //2