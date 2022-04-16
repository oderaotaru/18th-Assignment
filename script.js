// Question 1
var num1 = parseInt(prompt("Enter your first number"));
var num2 = parseInt(prompt("Enter your second number"));
sum = num1 + num2
var output = "Your numbers " + num1 + " and " 
+ num2 + " equals " + sum
alert(output);

// Question 2
var fname = prompt("Enter Your First Name");
var lname = prompt("Enter Your Last Name");

var first4 = fname.slice(0,4);
var first = lname.slice(0,1);

var output = "Your CapacityBay User ID is " + first4 + first

alert(output);