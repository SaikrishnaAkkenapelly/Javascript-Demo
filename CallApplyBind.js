let add = function () 
{
    console.log(this.num1 + this.num2);
}
//call
add.call({num1:12,num2:45});

let getBonus = function (experience,isPermanent)
{
    if(isPermanent)
        return this.salary + (0.1 * experience * this.salary);
    else
        return this.salary + (0.1 * this.salary);
}

let employee = { salary : 1000};

console.log(getBonus.call(employee,2,true));

//apply method we just pass the function arguments as an array
console.log(getBonus.call(employee,[2,true]));

//bind is same as call but instead of calling the method it stores the function definition
let temp = getBonus.bind(employee,2,true);
console.log(temp);
//we need to trigger the method binded
console.log(temp());