//it is heteroginous unlike java
let countMap = new Map();

countMap.set("Saikrishna",100);
countMap.set("Krishna",156);
countMap.set("Address",{place:"Hyderabad"});
countMap.set("Job",()=>{return "Developer"});

console.log(countMap.get("Krishna"));
console.log(countMap.get("Address"));

for (let [key,value] of countMap)
{
    console.log(key,":",value);
}

countMap.forEach((value,key) => {
    console.log("Printing..",value,key);
});