
var volts = prompt("Enter the voltage (in volts):");
var amps = prompt("Enter the current (in amperes):");


volts = Number(volts);
amps = Number(amps);


var watts = volts * amps;


console.log("Power (Watts) = " + watts + " W");
