
var discountedPrice = prompt("Enter the discounted selling price:");
var discountPercent = prompt("Enter the discount percentage:");

discountedPrice = Number(discountedPrice);
discountPercent = Number(discountPercent);

var originalPrice = discountedPrice / (1 - discountPercent / 100);


console.log("Original Selling Price: " + originalPrice);
