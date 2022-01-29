let userNames = ["Sai","Krishna","Akkenapelly"];
//filter
userNames.filter((userName) => 
{
    return userName === "Sai";
}).forEach((userName) => 
{
    console.log(userName);
});

userNames.filter((userName) => 
{
    return userName === "Sai";
}).map((userName) => {return "Saikishna"}).forEach((userName) => 
{
    console.log(userName);
});

console.log(userNames);

let scores = [22,44,1,67];

scores.forEach((element) =>
{
    console.log(element);
});

scores = scores.filter((element) => { return element % 2 == 0; }).map((element) =>
{
    return element * element;
});

scores.reduce((value1,value2) => 
{
    return value1 + value2;
});

scores.forEach((element) => {console.log(element);})