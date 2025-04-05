document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const logo = document.getElementById("themeLogo");
    const savedTheme = localStorage.getItem("theme") || "light";

    // Function to apply the theme
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            logo.src = "dark-logo.png"; // Change to your dark mode logo path
        } else {
            logo.src = "light-logo.png"; // Change to your light mode logo path
        }
    }

    // Apply saved theme on page load
    applyTheme(savedTheme);

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
    });
});
