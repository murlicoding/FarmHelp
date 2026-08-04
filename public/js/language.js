/*
====================================================
File : language.js

Purpose :
Switch Website Language (English / Hindi)

Author : Murli Rathi
====================================================
*/

const translations = {

    en:{

        heroTitle:"Smart Crop Disease Detection",

        heroText:"Upload a crop image and get instant disease prediction with treatment recommendations.",

        diagnose:"Diagnose Crop",

        marketplace:"Recommended Products",

        contact:"Contact Us"

    },

    hi:{

        heroTitle:"स्मार्ट फसल रोग पहचान",

        heroText:"फसल की तस्वीर अपलोड करें और तुरंत रोग तथा उपचार की जानकारी प्राप्त करें।",

        diagnose:"फसल की जांच करें",

        marketplace:"अनुशंसित उत्पाद",

        contact:"संपर्क करें"

    }

};

let currentLanguage = "en";

// Change Language
function changeLanguage(lang){

    currentLanguage = lang;

    const text = translations[lang];

    document.getElementById("heroTitle").innerHTML = text.heroTitle;

    document.getElementById("heroText").innerHTML = text.heroText;

    document.getElementById("diagnoseButton").innerHTML = text.diagnose;

    document.getElementById("marketplaceTitle").innerHTML = text.marketplace;

    document.getElementById("contactTitle").innerHTML = text.contact;

}

// Add Event Listeners
const englishButton = document.getElementById("englishBtn");
const hindiButton = document.getElementById("hindiBtn");

if(englishButton){

    englishButton.addEventListener("click",function(){

        changeLanguage("en");

    });

}

if(hindiButton){

    hindiButton.addEventListener("click",function(){

        changeLanguage("hi");

    });

}