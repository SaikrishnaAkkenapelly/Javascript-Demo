//string to number
let pincode = Number("5060021");
console.log(pincode, typeof pincode);

pincode = Number("34Saikrishna");
console.log(pincode, typeof pincode); //NaN

pincode = parseInt("34Saikrishna");
console.log(pincode, typeof pincode); //34

pincode = parseInt("A34Saikrishna");
console.log(pincode, typeof pincode); //NaN

pincode = parseFloat("34.3Saikrishna");
console.log(pincode, typeof pincode); //34.4

//string to boolean
let userName = Boolean("true");
console.log(userName, typeof userName);

//falsy values --> 0 , null, undefined, empty string
//turthy values --> all other than falsy

//number to boolean
userName = Boolean(0);
console.log(userName, typeof userName);

//number to string
pincode = String("43312");
console.log(pincode, typeof pincode);

let age = 12;
console.log(!age , typeof !age)

//unary operator to change string to number
age = "13";
console.log(age + 10); //1310
console.log(+age + 10); //23