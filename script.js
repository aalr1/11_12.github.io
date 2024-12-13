document.addEventListener("DOMContentLoaded", () => {
    console.log("Home page loaded!");

    // Example: Home page-specific logic
    const featuredButton = document.getElementById("featuredButton"); // Button added in HTML

    if (featuredButton) {
        featuredButton.addEventListener("click", () => {
            console.log("Featured button clicked!");
            // Add your logic for handling the featured button click here (e.g., showing a modal, navigating, etc.)
        });
    } else {
        console.log("Featured button not found in the HTML.");
    }
});
