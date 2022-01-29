//set is heterogenious in java script and it also store the insertion order
//it does not alllow duplicates as in java
let data = new Set();

data.add("Apple");
data.add("Banana");
data.add("Orange");
data.add("Grape");
data.add("Apple");
data.add(250);
data.add({seller : "Abc Fruits",place : "Hyderabad"});

data.forEach((element) => {
    console.log(element);
});

//has() method is similar to contians in java, returns true if element contains
if(data.has(250))
{
    console.log("we have it");
}