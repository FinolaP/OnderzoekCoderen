// Check of JavaScript geladen is
console.log("JavaScript werkt");

// Radio buttons en 'Volgende'-knop ophalen
const radios = document.querySelectorAll('input[type="radio"]');
const nextBtn = document.getElementById("nextBtn");

// Activeer de knop zodra een keuze is gemaakt
radios.forEach(function (radio) {
  radio.addEventListener("change", function () {
    console.log("Radio geselecteerd:", radio.value);
    nextBtn.disabled = false;
  });
});

// Ga naar de volgende pagina bij klik op de knop
nextBtn.addEventListener("click", function () {
  window.location.href = "leestekst.html";
});
