document.addEventListener('DOMContentLoaded', () => {
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
