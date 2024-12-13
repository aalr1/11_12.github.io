document.addEventListener("DOMContentLoaded", () => {
    console.log("Products page loaded!");

    // Example: Products page-specific logic
    const addToCartButtons = document.querySelectorAll(".cart-btn");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            // Get the product name (or any other identifying information)
            const productName = button.closest('.box').querySelector('h3').textContent;
            const productPrice = button.closest('.box').querySelector('.price').textContent;

            // Add logic to store item in cart (localStorage or cart array)
            console.log(`Product added: ${productName}, Price: ${productPrice}`);

            // Show the user feedback
            alert(`${productName} added to cart!`);
        });
    });
});

