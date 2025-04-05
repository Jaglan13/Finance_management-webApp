// Save account data in localStorage
function saveAccountData(account) {
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

function getAccountData() {
    return JSON.parse(localStorage.getItem("accounts")) || [];
}
function saveThemePreference(theme) {
    localStorage.setItem("selectedTheme", theme);
    applyTheme(theme);
}
function applyTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}


function loadTheme() {
    const savedTheme = localStorage.getItem("selectedTheme") || "light";
    applyTheme(savedTheme);
}

document.addEventListener("DOMContentLoaded", loadTheme);
