//arrow function is like lambda expression in java 8 there we create an implementation for a method in an functional interface
//here we assign the implementation to a variable
let getHelloWithInput = (input) =>
{
    return `Hello ${input}`;
}

console.log(getHelloWithInput("Saikrishna"));

let add = (num1,num2) => { return num1 + num2}

console.log(add(10,12));