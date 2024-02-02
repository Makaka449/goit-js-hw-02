function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid ;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}

const quantity = 5 ;
const pricePerDroid = 1000 ;

console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500)); 
