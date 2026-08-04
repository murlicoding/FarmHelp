/*
====================================================
File Name : app.js

Purpose :
Handles common website functionality

1. Mobile Navigation
2. Smooth Scrolling
3. Image Preview
4. Scroll Animation
5. Login Modal
6. Signup Modal

Author : Murli Rathi
====================================================
*/

// ================================
// Select Required Elements
// ================================

const loginButton = document.querySelector(".login-btn");
const signupButton = document.querySelector(".signup-btn");

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

const closeButtons = document.querySelectorAll(".close-modal");

const cropImageInput = document.getElementById("cropImage");
const previewImage = document.getElementById("previewImage");

const diagnoseButton = document.getElementById("diagnoseButton");


// ================================
// Open Login Modal
// ================================

if(loginButton){

    loginButton.addEventListener("click",function(){

        loginModal.style.display="flex";

    });

}

// ================================
// Open Signup Modal
// ================================

if(signupButton){

    signupButton.addEventListener("click",function(){

        signupModal.style.display="flex";

    });

}

// ================================
// Close Modals
// ================================

closeButtons.forEach(function(button){

    button.addEventListener("click",function(){

        loginModal.style.display="none";

        signupModal.style.display="none";

    });

});

// ================================
// Close Modal When Clicking Outside
// ================================

window.addEventListener("click",function(event){

    if(event.target==loginModal){

        loginModal.style.display="none";

    }

    if(event.target==signupModal){

        signupModal.style.display="none";

    }

});

// ================================
// Image Preview
// ================================

if(cropImageInput){

cropImageInput.addEventListener("change",function(){

    const file=this.files[0];

    if(!file){

        return;

    }

    const reader=new FileReader();

    reader.onload=function(e){

        previewImage.src=e.target.result;

    }

    reader.readAsDataURL(file);

});

}

// ================================
// Diagnose Button Animation
// ================================

if(diagnoseButton){

diagnoseButton.addEventListener("click",function(){

    diagnoseButton.innerHTML="Analyzing...";

    diagnoseButton.disabled=true;

});

}

// ================================
// Smooth Scroll
// ================================

const navLinks=document.querySelectorAll("a[href^='#']");

navLinks.forEach(function(link){

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ================================
// Scroll Animation
// ================================

const animatedItems=document.querySelectorAll(

".feature-card,.crop-card,.product-card,.testimonial-card,.step"

);

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},

{

threshold:0.2

}

);

animatedItems.forEach((item)=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition="all .7s";

observer.observe(item);

});

// ================================
// Navbar Background on Scroll
// ================================

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#ffffff";

header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

else{

header.style.background="#ffffff";

header.style.boxShadow="none";

}

});

// ================================
// Hero Button
// ================================

const heroButton=document.querySelector(".primary-btn");

if(heroButton){

heroButton.addEventListener("click",function(){

document.getElementById("diagnosis").scrollIntoView({

behavior:"smooth"

});

});

}

console.log("FarmHelp Loaded Successfully");