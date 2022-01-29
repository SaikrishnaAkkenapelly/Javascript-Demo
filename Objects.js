let employee = {
    employeeName : "Saikrishna",
    employeeNumber : 1222121
}

console.log(employee.employeeName);
console.log(employee["employeeName"]);

let input = "employeeName";
console.log(employee[input]);

employee = {
    employeeName : "Saikrishna",
    employeeNumber : 1222121,
    address : {
        country : "India"
    }
}

console.log(employee.address.country);
//console.log(employee.salary.basic); // will throw an error

console.log(employee.salary?.basic); // will not throw an error --> ? symbol check if it exits before doing operation

console.log(employee);

delete employee.address // delete operation

console.log(employee);