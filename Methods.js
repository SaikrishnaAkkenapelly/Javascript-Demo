// method is behaviour of an object like in java where as function is an independent

let employee = {
    employeeName : "Saikrishna",
    employeeNumber : 1222121,
    //this is used to represent current object in runtime
    getDetails : function (){ console.log(this.employeeName,this.employeeNumber)}
}

employee.getDetails();

let employee1 = {
    employeeName : "Saikrishna",
    employeeNumber : 1222121,
    getDetails : () => { console.log(this.employeeName,this.employeeNumber)}
}

employee1.getDetails();