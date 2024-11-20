let quantity = Number(prompt('Droids quantity:'));
let pricePerDroid = Number(prompt('Droids price:'));
let customerCredits = Number(prompt('Customers credits amount:'));

if((quantity == Number.NaN) || (pricePerDroid == Number.NaN || customerCredits == Number.NaN))
    console.log('quantity or pricePerDroid or customerCredits not a number');
else
    console.log(makeTransaction(quantity, pricePerDroid, customerCredits));

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid;
    if(totalPrice > customerCredits)
        return `Insufficient funds!`;
    
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}