document.addEventListener('DOMContentLoaded', () => {
    // Toggle theme
    const toggleThemeButton = document.getElementById('toggle-theme');
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
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
            // Simulate form submission
            document.getElementById('form-message').textContent = 'Thank you for your message!';
            form.reset();
        } else {
            document.getElementById('form-message').textContent = 'Please fill out all fields.';
        }
    });
});
