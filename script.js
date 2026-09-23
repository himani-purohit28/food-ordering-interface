let cart = [];
let total = 0;


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    displayCart();
}


function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        totalElement.textContent = "0";
        return;
    }

    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        `;

        cartItems.appendChild(div);
    });

    totalElement.textContent = total;
}


function filterFood(category) {

    const foods = document.querySelectorAll(".food-card");

    foods.forEach(function(food) {

        if (category === "all") {
            food.style.display = "block";
        }

        else if (food.classList.contains(category)) {
            food.style.display = "block";
        }

        else {
            food.style.display = "none";
        }

    });
}


function scrollToMenu() {

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}