/*
====================================================
File : diagnosis.js

Purpose :
Connect Frontend with Backend

API Used :
POST /api/diagnose

Author : Murli Rathi
====================================================
*/

// =======================================
// HTML Elements
// =======================================

const imageInput = document.getElementById("cropImage");
const symptomInput = document.getElementById("symptomText");
const diagnoseBtn = document.getElementById("diagnoseButton");

const diseaseName = document.getElementById("diseaseName");
const cropName = document.getElementById("cropName");
const confidence = document.getElementById("confidence");
const confidenceFill = document.getElementById("confidenceFill");
const treatmentText = document.getElementById("treatmentText");

const productGrid = document.getElementById("productGrid");

// =======================================
// Backend URL
// =======================================

const API_URL = "http://localhost:3000/api/diagnose";

// =======================================
// Diagnose Crop
// =======================================

async function diagnoseCrop() {

    const image = imageInput.files[0];
    const symptoms = symptomInput.value.trim();

    if (!image && symptoms === "") {

        alert("Please upload an image or write crop symptoms.");

        return;

    }

    diagnoseBtn.innerHTML = "Analyzing...";
    diagnoseBtn.disabled = true;

    const formData = new FormData();

    if (image) {

        formData.append("image", image);

    }

    formData.append("symptomText", symptoms);

    formData.append("lang", "en");

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            body: formData

        });

        const data = await response.json();

        if (!response.ok) {

            throw new Error(data.error);

        }

        showResult(data);

    }

    catch (error) {

        alert(error.message);

    }

    finally {

        diagnoseBtn.innerHTML = "Diagnose Crop";

        diagnoseBtn.disabled = false;

    }

}

// =======================================
// Display Result
// =======================================

function showResult(data) {

    diseaseName.innerHTML = data.name;

    cropName.innerHTML = data.crop;

    confidence.innerHTML = data.confidence + "%";

    confidenceFill.style.width = data.confidence + "%";

    treatmentText.innerHTML = data.cure;

    saveProducts(data.products);
renderProducts(data.products);

}

// =======================================
// Display Products
// =======================================

function loadProducts(products) {

    productGrid.innerHTML = "";

    products.forEach(function(product){

        productGrid.innerHTML += `

        <div class="product-card">

            <img src="assets/images/medicine.png">

            <h3>${product.name}</h3>

            <p>

                Pack : ${product.pack}

            </p>

            <p>

                Price : ₹${product.price}

            </p>

            <div class="product-buttons">

                <a href="${product.links.amazon}" target="_blank">

                    <button>Amazon</button>

                </a>

                <a href="${product.links.flipkart}" target="_blank">

                    <button>Flipkart</button>

                </a>

                <a href="${product.links.bighaat}" target="_blank">

                    <button>BigHaat</button>

                </a>

            </div>

        </div>

        `;

    });

}

// =======================================
// Button Click
// =======================================

diagnoseBtn.addEventListener("click", function(e){

    e.preventDefault();

    diagnoseCrop();

});