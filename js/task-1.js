//const name = "makeTransaction";
//let quantity = "5";
//let pricePerDroid = "3000";
//quantity = "3";
//pricePerDroid = "1000";
//quantity = "10";
//pricePerDroid = "500";

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
