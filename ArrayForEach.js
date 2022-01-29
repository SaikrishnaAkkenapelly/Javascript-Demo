//foreach is similar to foreach in java 8 which takes a lamba or a method reference

let userNames = ["Sai","Krishna","Akkenapelly"];
//foreach with single param
userNames.forEach((userName) => 
{
    console.log(userName);
});

//foreach will also take multiple params the second one is the index of the array and the third
//one is the entire array see the documentatoin
userNames.forEach((userName,index,allNames) => 
{
    console.log(userName,index,allNames);
});