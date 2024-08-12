document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Update cart display
    function updateCart() {
        cartCountElement.textContent = cart.length;
        if (cart.length === 0) {
            cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            const itemsHtml = cart.map(item => `
                <div class="cart-item">
                    <p>Product ${item.id} - $${item.price}</p>
                </div>
            `).join('');
            cartItemsElement.innerHTML = itemsHtml;
        }
    }

    // Add to cart button event listener
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));

            cart.push({ id: productId, price: productPrice });
            updateCart();
        });
    });

    // Handle form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            document.getElementById('form-message').textContent = 'Thank you for your message!';
            form.reset();
        } else {
            document.getElementById('form-message').textContent = 'Please fill out all fields.';
        }
    });
});
