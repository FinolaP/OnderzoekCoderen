// Check of JavaScript geladen is
console.log("JavaScript werkt");

/* =========================
   INDEX.HTML – RADIO KEUZE
========================= */

const radios = document.querySelectorAll('input[type="radio"]');
const nextBtn = document.getElementById("nextBtn");

if (radios.length && nextBtn) {
  radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      console.log("Radio geselecteerd:", radio.value);
      nextBtn.disabled = false;
    });
  });

  nextBtn.addEventListener("click", function () {
    window.location.href = "leestekst.html";
  });
}

/* =========================
   LEESTEKST.HTML – TEKSTSTAPPEN
========================= */

const steps = document.querySelectorAll(".text_step");

if (steps.length) {
  steps.forEach(function (step, index) {
    const btn = step.querySelector("[data-next]");
    if (!btn) return;

    btn.addEventListener("click", function () {
      const nextStep = steps[index + 1];
      if (nextStep) {
        nextStep.classList.add("is_visible");
        nextStep.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // pijlknop verbergen na klik
      btn.style.display = "none";
    });
  });
}

/* =========================
   LEESTEKST.HTML – BLAUWE VOLGENDE KNOP
========================= */

const leestekstVolgende = document.getElementById("leestekst_volgende");

if (leestekstVolgende) {
  leestekstVolgende.addEventListener("click", function () {
    window.location.href = "opdracht1.html";
  });
}

/* =========================
   OPDRACHT1.HTML – RADIO → PRESENTATIE
========================= */

const presentatieTekst = document.getElementById("presentatie_tekst");
const vraag1Radios = document.querySelectorAll('input[name="vraag1"]');

if (presentatieTekst && vraag1Radios.length) {
  vraag1Radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      console.log("Vraag1 gekozen:", radio.value);

      const teksten = {
        A: "De supermarkt wil mensen laten geloven dat eten volgens het regenboogdieet gezond is, maar de schrijver vraagt zich af of dat echt klopt.",
        B: "Het regenboogdieet is een manier van eten waarbij je alle kleuren groenten en fruit moet eten.",
        C: "De supermarkt verkoopt gezonde producten, zoals een wintergroentenmix.",
        D: "De schrijver vindt dat reclames over gezond eten niet te vertrouwen zijn."
      };

      presentatieTekst.textContent = teksten[radio.value] || "";
    });
  });
}

console.log("Script reached the end");
