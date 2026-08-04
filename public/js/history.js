/*
====================================================
File : history.js

Purpose :
Display User Diagnosis History

Backend API

GET /api/history

Author : Murli Rathi
====================================================
*/

const HISTORY_API = "http://localhost:3000/api/history";

const historyContainer = document.getElementById("historyList");

// ========================================
// Load Diagnosis History
// ========================================

async function loadHistory() {

    const token = localStorage.getItem("token");

    if (!token) {

        if(historyContainer){

            historyContainer.innerHTML = `
                <p style="text-align:center;">
                    Login to view your diagnosis history.
                </p>
            `;

        }

        return;

    }

    try {

        const response = await fetch(HISTORY_API, {

            method: "GET",

            headers: {

                Authorization: "Bearer " + token

            }

        });

        const history = await response.json();

        if (!response.ok) {

            throw new Error(history.error);

        }

        showHistory(history);

    }

    catch (error) {

        console.log(error);

    }

}

// ========================================
// Display History
// ========================================

function showHistory(history) {

    historyContainer.innerHTML = "";

    if (history.length === 0) {

        historyContainer.innerHTML = `

        <div class="history-card">

            <h3>No Previous Diagnoses</h3>

            <p>Your diagnosis history will appear here.</p>

        </div>

        `;

        return;

    }

    history.reverse();

    history.forEach(function(item){

        historyContainer.innerHTML += `

        <div class="history-card">

            <div class="history-top">

                <h3>${item.diseaseName}</h3>

                <span>${item.confidence}%</span>

            </div>

            <p>

                <strong>Symptoms :</strong>

                ${item.symptomText || "Image Uploaded"}

            </p>

            <p>

                <strong>Date :</strong>

                ${new Date(item.createdAt).toLocaleString()}

            </p>

        </div>

        `;

    });

}

// ========================================
// Auto Load
// ========================================

window.addEventListener("load", loadHistory);