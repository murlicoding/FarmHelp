/*
====================================================
File Name : navbar.js

Purpose :
Handles Navbar Functionality

1. Sticky Navbar
2. Mobile Menu
3. Active Navigation Link
4. Smooth Scrolling

Author : Murli Rathi
====================================================
*/

// ======================================
// Select Elements
// ======================================

const header = document.querySelector("header");
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-links a");

// ======================================
// Sticky Navbar
// ======================================

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ======================================
// Mobile Menu
// ======================================

if (menuButton) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("show-menu");

    });

}

// ======================================
// Close Mobile Menu After Clicking Link
// ======================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {

            navMenu.classList.remove("show-menu");

        }

    });

});

// ======================================
// Active Link Highlight
// ======================================

window.addEventListener("scroll", function () {

    let currentSection = "";

    document.querySelectorAll("section").forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

// ======================================
// Smooth Scrolling
// ======================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});