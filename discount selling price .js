
var originalPrice = prompt("Enter the original selling price:");
var discountPercent = prompt("Enter the discount percentage:");


originalPrice = Number(originalPrice);
discountPercent = Number(discountPercent);


var discountAmount = (discountPercent / 100) * originalPrice;


var discountedPrice = originalPrice - discountAmount;


console.log("Discounted Selling Price: " + discountedPrice);
