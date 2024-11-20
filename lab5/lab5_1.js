let country = prompt('Delivery country:');
let price = Number(prompt('Product s price:'));
let deliveryFee = Number(prompt('Delivery fee:'));

if((price == Number.NaN) || (deliveryFee == Number.NaN))
    console.log('price or deliveryFee not a number');
else
    console.log(getShippingMessage(country, price, deliveryFee));

function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits.`;
}