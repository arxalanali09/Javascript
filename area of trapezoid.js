
var a = prompt("Enter length of first parallel side (a):");
var b = prompt("Enter length of second parallel side (b):");
var h = prompt("Enter the perpendicular distance (height h):");


a = Number(a);
b = Number(b);
h = Number(h);


var area = 0.5 * (a + b) * h;

console.log("Area of the trapezoid is: " + area);
