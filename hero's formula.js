
var a = prompt("Enter length of side a:");
var b = prompt("Enter length of side b:");
var c = prompt("Enter length of side c:");


a = Number(a);
b = Number(b);
c = Number(c);


var s = (a + b + c) / 2;


var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));


console.log("Area of the triangle is: " + area);
