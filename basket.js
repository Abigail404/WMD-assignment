let basket = [];

// Function to add items to the basket
function addToBasket(item, price) {
    basket.push({ item, price });
    alert(`${item} has been added to your basket.`);
    updateBasketStorage();
}

// Function to save the basket to localStorage
function updateBasketStorage() {
    localStorage.setItem('basket', JSON.stringify(basket));
}

// Function to load the basket from localStorage
function loadBasket() {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
        basket = JSON.parse(storedBasket);
    }
}

// Redirect to the checkout page
function goToCheckout() {
    window.location.href = 'order.html';
}

// Load the basket when the page loads
loadBasket();