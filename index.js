// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
    let text = document.getElementById('text')
    text.textContent = "The is really cool!"
    console.log("The DOM as loaded");
});
console.log("This fires befor the DOM is Loaded!");