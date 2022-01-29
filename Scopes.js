//global scope
let userName = "Saikrishna";
console.log(userName);

sayHello();

function sayHello()
{
    //local scope
    let userMessage = "Welcome";
    //global scope
    console.log("Hello" + userName);
    //local scope
    console.log(userMessage);
}

//local scope
//console.log(userMessage); // will thorw an error

//function with default value
function getHelloWithInput(input="Saikrishna")
{
    return `Hello ${input}`;
}

console.log(getHelloWithInput("Saikrishna"));
//defualt value comes into picture
console.log(getHelloWithInput());