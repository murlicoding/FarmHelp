/*
====================================================
File : products.js

Purpose :
Manage Marketplace Products

Features
1. Search Products
2. Filter Products
3. Open Store Links

Author : Murli Rathi
====================================================
*/

// ======================================
// Product Grid
// ======================================

const productContainer = document.getElementById("productGrid");

// Stores products received from backend
let allProducts = [];

// ======================================
// Save Products
// ======================================

function saveProducts(products){

    allProducts = products;

}

// ======================================
// Render Products
// ======================================

function renderProducts(products){

    if(!productContainer){

        return;

    }

    productContainer.innerHTML = "";

    if(products.length === 0){

        productContainer.innerHTML = `

        <h3 style="text-align:center;">
            No Products Found
        </h3>

        `;

        return;

    }

    products.forEach(function(product){

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="assets/images/medicine.png" alt="Medicine">

            <h3>${product.name}</h3>

            <p><strong>Pack :</strong> ${product.pack}</p>

            <p><strong>Price :</strong> ₹${product.price}</p>

            <div class="product-buttons">

                <button onclick="window.open('${product.links.amazon}','_blank')">
                    Amazon
                </button>

                <button onclick="window.open('${product.links.flipkart}','_blank')">
                    Flipkart
                </button>

                <button onclick="window.open('${product.links.bighaat}','_blank')">
                    BigHaat
                </button>

            </div>

        </div>

        `;

    });

}

// ======================================
// Filter Products
// ======================================

function filterProducts(keyword){

    if(keyword==="All"){

        renderProducts(allProducts);

        return;

    }

    const filtered = allProducts.filter(function(product){

        return product.name
                     .toLowerCase()
                     .includes(keyword.toLowerCase());

    });

    renderProducts(filtered);

}

// ======================================
// Search Product
// ======================================

const searchInput = document.getElementById("productSearch");

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        const value = this.value.toLowerCase();

        const result = allProducts.filter(function(product){

            return product.name
                          .toLowerCase()
                          .includes(value);

        });

        renderProducts(result);

    });

}

// ======================================
// Export Functions
// ======================================

window.saveProducts = saveProducts;
window.renderProducts = renderProducts;
window.filterProducts = filterProducts;