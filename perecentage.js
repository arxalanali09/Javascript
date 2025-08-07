// Take input from user
let obtained = parseFloat(prompt("Enter total obtained marks:"));
let maximum = parseFloat(prompt("Enter maximum possible marks:"));

// Check if maximum is valid
if (maximum > 0) {
  let percentage = (obtained / maximum) * 100;
  console.log("Percentage: " + percentage.toFixed(2) + "%");
} else {
  console.log("Maximum marks must be greater than zero.");
}
