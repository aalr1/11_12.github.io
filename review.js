document.addEventListener("DOMContentLoaded", () => {
    console.log("Review page loaded!");

    // Example: Review page-specific logic
    const reviewStars = document.querySelectorAll(".stars i");

    reviewStars.forEach((star) => {
        // Change star color on hover
        star.addEventListener("mouseover", () => {
            star.style.color = "gold";
        });

        // Revert star color on mouseout
        star.addEventListener("mouseout", () => {
            star.style.color = ""; // Default color
        });

        // Optional: Change color permanently when clicked (to simulate rating selection)
        star.addEventListener("click", () => {
            star.style.color = "gold"; // Change color to gold when clicked (indicates a selection)
            let siblings = star.parentElement.children;
            // Update color of all previous stars (to simulate full rating)
            for (let i = 0; i < siblings.length; i++) {
                if (i <= [...siblings].indexOf(star)) {
                    siblings[i].style.color = "gold";
                } else {
                    siblings[i].style.color = ""; // Reset color for remaining stars
                }
            }
        });
    });
});
