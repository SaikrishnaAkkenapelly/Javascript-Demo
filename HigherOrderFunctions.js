function sayHelloWithName(inputFunction)
{
    console.log("Hello "+inputFunction());
}

sayHelloWithName(()=>{return "Saikrishna"});

function getName()
{
    return function getFullName()
    {
        return "Saikrishna Akkenapelly";
    }
}

let userName = getName();
console.log(userName());