// Check of JavaScript geladen is
console.log("JavaScript werkt");

/*   INDEX.HTML – RADIO KEUZE*/

// Alleen uitvoeren als er radio buttons bestaan (index.html)
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

/*   LEESTEKST.HTML – TEKSTSTAPPEN*/

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

/* LEESTEKST.HTML – BLAUWE VOLGENDE KNOP*/

leestekstVolgende.addEventListener("click", function () {
    window.location.href = "opdracht1.html";
  });
