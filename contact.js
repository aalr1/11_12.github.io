document.addEventListener("DOMContentLoaded", () => {
    console.log("Contact page loaded!");

    // Get the contact form
    const contactForm = document.querySelector("form");
    if (contactForm) {
        // Add an event listener for form submission
        contactForm.addEventListener("submit", (event) => {
            // Prevent default form submission
            event.preventDefault();

            // Check if all fields are filled (basic validation)
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const phone = contactForm.querySelector('input[type="number"]').value;
            const message = contactForm.querySelector('textarea').value;

            if (name && email && phone && message) {
                // Form is valid, show a success message
                alert("Message sent successfully!");
                
                // Optional: Clear the form after submission
                contactForm.reset();
            } else {
                // Form is invalid, show an error message
                alert("Please fill in all fields.");
            }
        });
    }
});
