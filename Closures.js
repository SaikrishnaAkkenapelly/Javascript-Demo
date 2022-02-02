function printMessage(name)
{
    name = name + " to JS closure"
    return function()
    {
        console.log(`Welcome ${name}`);
    }
}

let innerFunction = printMessage("Saikrishna");
//here we are calling this function, generally we assume name is not declared error as per
//other languages but in javascript when a function is retured it's closure is returned
innerFunction();

function add(num1)
{
    return function(num2)
    {
        return num1 + num2;
    }
}

let sum = add(10);
let result = sum(20);

console.log(result);