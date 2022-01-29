let sayHello = function(){
    console.log("Hello");
}

sayHello()

sayHello = function (input){
    return `Hello ${input}`;
}

console.log(sayHello("Saikrishna"));