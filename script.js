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


// All steps
const steps = document.querySelectorAll(".text_step");

steps.forEach(function (step, index) {
  const btn = step.querySelector("[data-next]");
  if (!btn) return;

  btn.addEventListener("click", function () {
    // hide current
    step.classList.remove("is_visible");

    // show next (if it exists)
    const nextStep = steps[index + 1];
    if (nextStep) {
      nextStep.classList.add("is_visible");
      nextStep.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});