// Check of JavaScript geladen is
console.log("JavaScript gestart");

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


/* =========================
   OPDRACHT1 – VOLGENDE KNOP
========================= */

const opdracht1Volgende = document.getElementById("opdracht1_volgende");

if (opdracht1Volgende) {
  opdracht1Volgende.addEventListener("click", function () {
    window.location.href = "opdracht2.html";
  });
}

/* =========================
   OPDRACHT2 – RADIO → PRESENTATIE
========================= */

const presentatieTekst2 = document.getElementById("presentatie_tekst_2");
const vraag2Radios = document.querySelectorAll('input[name="vraag2"]');

if (presentatieTekst2 && vraag2Radios.length) {
  vraag2Radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      const teksten = {
        A: "In het regenboogdieet mag je geen zuivel of granen eten",
        B: "Veel mensen bouwen hun eetgewonens op rond het regenboogdieet, omdat het erg populair is",
        C: "Volgens hoogleraar Renger Witkamp is het regenboogdieet te eenzijdig, omdat je dan andere geonde producten, zoals zuivel en granen, mist",
        D: "Renger Witkmap vindt het regenboogdieet ongezond en raadt het af om te volgen"
      };

      presentatieTekst2.textContent = teksten[radio.value] || "";
    });
  });
}


/* =========================
   OPDRACHT2 – VOLGENDE KNOP
========================= */

const opdracht2Volgende = document.getElementById("opdracht2_volgende");

if (opdracht2Volgende) {
  opdracht2Volgende.addEventListener("click", function () {
    window.location.href = "opdracht3.html";
  });
}

/* =========================
   OPDRACHT3 – RADIO → PRESENTATIE
========================= */

const presentatieTekst3 = document.getElementById("presentatie_tekst_3");
const vraag3Radios = document.querySelectorAll('input[name="vraag3"]');

if (presentatieTekst3 && vraag3Radios.length) {
  vraag3Radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      const teksten = {
        A: "Gekleurde groenten en fruit zijn gezond, maar het regenboogdieet garandeert niet automatisch een goede gezondheid.",
        B: "Wie veel kleuren eet, is gezonder dan mensen die dat niet doen.",
        C: "In onderzoeken is bewezen dat het regenboogdieet beter is dan andere diëten.",
        D: "Alleen mensen die veel bewegen hoeven niet op hun eten te letten."
      };

      presentatieTekst3.textContent = teksten[radio.value] || "";
    });
  });
}

/* =========================
   OPDRACHT 3 – VOLGENDE KNOP
========================= */

const opdracht3Volgende = document.getElementById("opdracht3_volgende");

if (opdracht3Volgende) {
  opdracht3Volgende.addEventListener("click", function () {
    window.location.href = "opdracht4.html";
  });
}

/* =========================
   OPDRACHT4 – RADIO → PRESENTATIE
========================= */

const presentatieTekst4 = document.getElementById("presentatie_tekst_4");
const vraag4Radios = document.querySelectorAll('input[name="vraag4"]');

if (presentatieTekst4 && vraag4Radios.length) {
  vraag4Radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      const teksten = {
        A: "Het regenboogdieet is te duur om gezond te kunnen eten",
        B: "Mensen die het regeboogdieet volgen, hoeven niet meer naar de supermarkt",
        C: "Volgens Witkamp moet iedereen het regenboogdieet volgen om gezond te blijven",
        D: "Het regenboogdieet is een prima richtlijn zolang je gevarieerd eet, al kan het wat duurder zijn."
      };

      presentatieTekst4.textContent = teksten[radio.value] || "";
    });
  });
}

/* =========================
   OPDRACHT 4 – VOLGENDE KNOP
========================= */

const opdracht4Volgende = document.getElementById("opdracht4_volgende");

if (opdracht4Volgende) {
  opdracht4Volgende.addEventListener("click", function () {
    window.location.href = "waarschuwing.html";
  });
}

/* javascript om knop te activeren als checkbox is aangeklikt */
const begrijpCheck = document.getElementById("begrijp_check");
const begrijpVolgende = document.getElementById("begrijp_volgende");

if (begrijpCheck && begrijpVolgende) {
  // checkbox → knop aan/uit
  begrijpCheck.addEventListener("change", function () {
    begrijpVolgende.disabled = !begrijpCheck.checked;
  });

  // klik op knop → naar volgende pagina
  begrijpVolgende.addEventListener("click", function () {
    if (!begrijpVolgende.disabled) {
      window.location.href = "Laatstetekst.html";
    }
  });
}

// Begrijp → volgende (naar conceptmap.html)
const begrijpVolgendeBtn = document.getElementById("begrijp_volgende");

if (begrijpVolgendeBtn) {
  begrijpVolgendeBtn.addEventListener("click", function () {
    window.location.href = "conceptmap.html";
  });
}

/* =========================
   CONCEPTMAP – TIMER + TAG KOPPELING
========================= */

document.addEventListener("DOMContentLoaded", function () {
  const conceptmapVolgende = document.getElementById("conceptmap_volgende");
  const timeTag = document.getElementById("time_tag");

  if (conceptmapVolgende) {
    setTimeout(function () {
      conceptmapVolgende.disabled = false;

      // tag zacht laten verdwijnen
      if (timeTag) {
        timeTag.style.opacity = "0";

        setTimeout(function () {
          timeTag.style.display = "none";
        }, 300);
      }
    }, 2000);// ⬅️ 2 seconden
  }
});

/*=========== concept map volgende knop ============*/
const conceptmap_volgende = document.getElementById("conceptmap_volgende");

if (conceptmap_volgende) {
  conceptmap_volgende.addEventListener("click", function () {
    window.location.href = "opdracht5.html";
  });
}