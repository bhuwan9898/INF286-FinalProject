function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
}
function hideMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
}


const scrollToTopButton = document.getElementById('scroll-to-top-button');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll the page to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

