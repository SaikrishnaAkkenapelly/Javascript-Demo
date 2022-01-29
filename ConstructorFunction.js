//constructor function always starts with a capital letter it is like a class in java
function Employee(employeeName,employeeNumber)
{
    this.employeeName = employeeName;
    this.employeeNumber = employeeNumber;
    this.getDetails  = function()
    {
        console.log(this.employeeName,this.employeeNumber);
    }
}

let employee1 = new Employee("Saikrishna",32323);
let employee2 = new Employee("Nikhil",32324);

console.log(employee1);
console.log(employee2);
employee2.getDetails();