console.log("JavaScript werkt");

// 1. Elementen ophalen
const form = document.getElementById("templateForm");
const nextBtn = document.getElementById("nextBtn");

//2. veranderingen bijhouden formulier 

form.addEventListener("change", function () {
    // controleren of radio button is geselecteerd
    const selected = form.querySelector('input[name="template"]:checked');

     console.log("Geselecteerd:", selected);
     
    if (selected) {
        nextBtn.disabled = false;
        }   
});

