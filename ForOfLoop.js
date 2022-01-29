//generally for of loop is used for arrays
let values = [];

for(let num = 1; num <= 100; num++)
{
    values.push(num);
}

//for of loop is like an enchanced for loop in java to iterate a array where is for in loop is like iterating hash map .. since it has key value pairs
for(let value of values)
{
    console.log(value);
}