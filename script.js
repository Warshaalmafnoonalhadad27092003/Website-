/*=========================================
 AL FUNOON STEEL WORKS
 script.js - Part 1
=========================================*/

// =========================
// Loader
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// =========================
// Current Year
// =========================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =========================
// Header Shadow
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});/*=========================================
 AL FUNOON STEEL WORKS
 script.js - Part 2
 Image Slider • Counter • Active Nav
=========================================*/

// =========================
// Auto Image Slider
// =========================

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {

    if (slides.length === 0) return;

    slides.forEach(slide => {

        slide.style.display = "none";

    });

    slides[index].style.display = "block";

}

if (slides.length > 0) {

    showSlide(currentSlide);

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 4000);

}

// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = parseInt(counter.dataset.target);
        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / 100);

            count += increment;

            if (count < target) {

                counter.textContent = count;
                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});/*=========================================
 AL FUNOON STEEL WORKS
 script.js - Part 3 (FINAL)
 Reveal • Contact • Back To Top • WhatsApp
=========================================*/

// =========================
// Reveal Animation
// =========================

const hiddenElements = document.querySelectorAll(".hidden");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach(el => {
    revealObserver.observe(el);
});

// =========================
// Contact Form
// =========================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !message) {

            alert("Please fill all required fields.");
            return;

        }

        alert("Thank you! We will contact you soon.");

        form.reset();

    });

}

// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    topBtn.style.display = window.scrollY > 300 ? "block" : "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// Floating WhatsApp Button
// =========================

const whatsapp = document.createElement("a");

whatsapp.id = "whatsapp";
whatsapp.href = "https://wa.me/966536208079";
whatsapp.target = "_blank";
whatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

// =========================
// Website Loaded
// =========================

console.log("Al Funoon Steel Works Website Loaded Successfully");
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.classList.add("hidden");

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }
});

