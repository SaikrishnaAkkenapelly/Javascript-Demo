function printNumbers(start)
{
    if(start < 0)
    {
        start = 0;
    }

    return function(end)
    {
        for( ; start < end; start++)
        {
            console.log(start);
        }
    }
}
//currying..
let innerFunction = printNumbers(3);
innerFunction(10);

function printOdds(start,end)
{
    start = start % 2 === 0 ? start : start + 1;
    for(;start < end;start = start + 1)
    {
        console.log("Odd Numbers.."+start);
    }
}

let bindedFunction = printOdds.bind(this,10);
//currying
bindedFunction(20);
bindedFunction(50);