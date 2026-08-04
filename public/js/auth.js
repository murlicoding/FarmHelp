/*
====================================================
File : auth.js

Purpose :
Handles User Login and Signup

Backend API

POST /api/auth/signup
POST /api/auth/login

Author : Murli Rathi
====================================================
*/

const BACKEND = "http://localhost:3000";

// ----------------------------
// Signup
// ----------------------------

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", signupUser);

}

async function signupUser(event) {

    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();

    const email = document.getElementById("signupEmail").value.trim();

    const phone = document.getElementById("signupPhone").value.trim();

    const password = document.getElementById("signupPassword").value;

    try {

        const response = await fetch(BACKEND + "/api/auth/signup", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name,

                email,

                phone,

                password

            })

        });

        const data = await response.json();

        if (!response.ok) {

            alert(data.error);

            return;

        }

        alert("Account Created Successfully!");

        signupForm.reset();

        document.getElementById("signupModal").style.display = "none";

    }

    catch (error) {

        alert("Server Error");

    }

}

// ----------------------------
// Login
// ----------------------------

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", loginUser);

}

async function loginUser(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();

    const password = document.getElementById("loginPassword").value;

    try {

        const response = await fetch(BACKEND + "/api/auth/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                email,

                password

            })

        });

        const data = await response.json();

        if (!response.ok) {

            alert(data.error);

            return;

        }

        localStorage.setItem("token", data.token);

        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful!");

        document.getElementById("loginModal").style.display = "none";

        updateNavbar();

    }

    catch (error) {

        alert("Unable to Login");

    }

}

// ----------------------------
// Logout
// ----------------------------

function logoutUser() {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    location.reload();

}

// ----------------------------
// Navbar Update
// ----------------------------

function updateNavbar() {

    const user = JSON.parse(localStorage.getItem("user"));

    const loginButton = document.querySelector(".login-btn");

    const signupButton = document.querySelector(".signup-btn");

    if (!user) {

        return;

    }

    loginButton.innerHTML = "Logout";

    signupButton.innerHTML = user.name;

    loginButton.onclick = logoutUser;

}

// ----------------------------
// Load User
// ----------------------------

window.addEventListener("load", updateNavbar);