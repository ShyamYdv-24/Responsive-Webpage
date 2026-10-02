// ================= NAVBAR FIX AFTER 500px =================


const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY >= 500) {

        navbar.classList.add("fixed");

    } else {

        navbar.classList.remove("fixed");

    }

});


// ================= SCROLL TO TOP =================

const scrollTopBtn = document.getElementById("scrollTopBtn");


// Show button after scrolling

window.addEventListener("scroll", function () {

    if (window.scrollY >= 500) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});


// Scroll to top when button is clicked

scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});