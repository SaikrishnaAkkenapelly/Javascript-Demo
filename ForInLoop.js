//generaly for in loop is used when ther is key value pair concept
employee = {
    employeeName : "Saikrishna",
    employeeNumber : 1222121,
    address : {
        state : "Telangana",
        country : "India"
    }
}

for(let key in employee)
{
    console.log(key,employee[key]);
}