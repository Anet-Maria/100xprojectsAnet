let totalItems = 5;
let addedItems = 0;
let totalPrice = 0;

function sum(name, price) {

    if (totalItems <= 0) {
        alert("No more items available");
        return;
    }

    totalItems--;
    addedItems++;
    totalPrice += price;

    document.getElementById("tot").innerHTML =
        "Total items: " + totalItems;

    document.getElementById("itms").innerHTML =
        "Added items: " + addedItems;

    document.getElementById("pr").innerHTML =
        "Total Price: ₹" + totalPrice;

    document.getElementById("itml").innerHTML +=
        `<div>${name} - ₹${price}</div>`;
}