document.addEventListener("DOMContentLoaded", () => {
    console.log("About page loaded!");

    // Example: About page-specific logic
    const learnMoreButton = document.getElementById("learnMore");

    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", () => {
            alert("Thank you for your interest in learning more about us!");
            // Additional actions (like redirecting) could be added here
        });
    } else {
        console.log("Learn More button not found!");
    }
});
