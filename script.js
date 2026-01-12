console.log("JavaScript werkt");

// 1. Elementen ophalen
const form = document.getElementById("templateForm");
const nextBtn = document.getElementById("nextBtn");

//2. veranderingen bijhouden formulier 

form.addEventListener("change", function () {
  console.log("Er is iets veranderd in het formulier");
});

