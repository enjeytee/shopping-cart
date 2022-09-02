function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
};
let possibleProducts = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦"];
let products = [...Array(roll(1, 13))].map((_, i) => {
    return {
        index: i,
        title: possibleProducts[roll(0, possibleProducts.length)],
        price: parseFloat(roll(1, 10, 1).toFixed(2)),
        count: roll(1, 13),
        weight: roll(.5, 1.5, 1)
    };
});
const cartTotal = products.reduce((accumulator, { price, count }) => {
    accumulator += price * count;
    return accumulator;
}, 0)
const taxRate = roll(5, 9.1, 1);
const cart = document.getElementById("Products");
let cartHtml = "";
products.forEach(product => {
    cartHtml += `
        <div class="product">
            <div>${product.title}</div>
            <div>💲${product.price}</div>
            <div>x${product. count}</div>
            <div>${parseFloat(product.weight * product.count).toFixed(2)} kg</div>
        </div>
    `
});
const cartWeight = products.reduce((accumulator, { count, weight }) => {
    accumulator += count * weight;
    return accumulator;
}, 0);
cart.innerHTML = cartHtml;
const summary = document.getElementById("Summary");
summary.innerHTML = `
    <div>Total: 💲${cartTotal.toFixed(2)}</div>
    <div>Tax Rate: ${taxRate.toFixed(2)}%</div>
    <div>Amount Due: 💲${(cartTotal + (cartTotal * taxRate / 100)).toFixed(2)}</div>
    <div>Total Weight: ${parseFloat(cartWeight.toFixed(2))} kg</div>
`