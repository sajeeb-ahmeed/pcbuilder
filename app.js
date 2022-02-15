// document.getElementById('sixteenGB').addEventListener('click', function () {
//     let extraMemoryPrice = document.getElementById('memory-cost');
//     extraMemoryPrice.innerText = 200;
// })
// document.getElementById('eightGB').addEventListener('click', function () {
//     const extraMemoryPrice = document.getElementById('memory-cost');
//     extraMemoryPrice.innerText = 0;
// });

// document.getElementById('ssd1').addEventListener('click', function () {
//     const storageCost = document.getElementById('storage-cost');
//     storageCost.innerText = 0;
//     console.log(storageCost);

// })
// document.getElementById('ssd2').addEventListener('click', function () {
//     const storageCost = document.getElementById('storage-cost');
//     storageCost.innerText = 400;
//     console.log('fdfd');

// })
// document.getElementById('ssd3').addEventListener('click', function () {
//     const storageCost = document.getElementById('storage-cost');
//     storageCost.innerText = 500;
//     console.log(storageCost);

// })
// document.getElementById('paid-delivery').addEventListener('click', function () {
//     const freeDelivary = document.getElementById('delivery-cost');
//     freeDelivary.innerText = 20;
// })
// document.getElementById('free-delivery').addEventListener('click', function () {
//     const freeDelivary = document.getElementById('delivery-cost');
//     freeDelivary.innerText = 0;
// })

//onclick 
function elements(updateId, price) {
    const updatedId = document.getElementById(updateId);
    updatedId.innerText = price;
    getElement();
}

function common(params) {
    const element = document.getElementById(params);
    const updateElement = parseInt(element.innerText);
    // console.log(element);
    return updateElement;
}

function getElement() {
    const totalPrice =
        common('best-price') +
        common('memory-cost') +
        common('storage-cost') +
        common('delivery-cost');

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
    return total;
}

function getPromo() {
    const promoCode = "pHero";
    const addPromo = document.getElementById('promo-input').value;
    if (addPromo == promoCode) {
        const total = document.getElementById("total-price");
        let totalPrice = parseInt(total.innerText)
        totalPrice = totalPrice - totalPrice * 0.2;
        total.innerText = totalPrice;
        console.log(totalPrice);
    }
}