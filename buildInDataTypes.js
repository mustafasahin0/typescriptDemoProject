// Number
var first = 12.0;
var second = 0x37CF;
var third = 255;
var fourth = 57;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
//String
var empName = "John";
var empDept = "IT";
console.log(empName);
console.log(empDept);
var stmt = empName + " works in " + empDept;
console.log(stmt);
// Boolean
var b = true;
console.log(b);
// void Type
function hello() {
    console.log("This is welcome message");
}
// Null Type: represents a variable whose value is undefined.
var num1 = null;
num1 = 100;
console.log(num1);
// Undefined Type: undefined is a primitive type whose value is uninitialized.
var num2 = undefined;
num2 = 200;
console.log(num2);
// Any Type
var val = "Hi";
val = 100; //ok
console.log(val);
val = false;
console.log(val);
function myFunction(x, y) {
    console.log(x + y);
}
myFunction(100, 200);
myFunction("Hi", "Bye");
