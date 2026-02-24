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

/* =========================
   OPDRACHT 5 – VOLGENDE KNOP
========================= */

const opdracht5Volgende = document.getElementById("opdracht5_volgende");

if (opdracht5Volgende) {
  opdracht5Volgende.addEventListener("click", function () {
    window.location.href = "opdracht6.html";
  });
}

/* =========================
   OPDRACHT 6 – VOLGENDE KNOP
========================= */

const opdracht6Volgende = document.getElementById("opdracht6_volgende");

if (opdracht6Volgende) {
  opdracht6Volgende.addEventListener("click", function () {
    window.location.href = "opdracht7.html";
  });
}

/* =========================
 Debat_index.html – VOLGENDE KNOP
========================= */

const templateForm = document.getElementById("templateForm");
const debatIndexVolgende = document.getElementById("debat_index_volgende");

if (templateForm && debatIndexVolgende) {

  const radioButtons = templateForm.querySelectorAll('input[name="template"]');

  // When a radio button is selected → enable button
  radioButtons.forEach(function(radio) {
    radio.addEventListener("change", function() {
      debatIndexVolgende.disabled = false;
    });
  });

  // When clicking button → go to next page
  debatIndexVolgende.addEventListener("click", function() {
    if (!debatIndexVolgende.disabled) {
      window.location.href = "VolgendePagina.html"; // change this
    }
  });

}

const debat_index_volgende = document.getElementById("debat_index_volgende");

if (debat_index_volgende) {
  debat_index_volgende.addEventListener("click", function () {
    window.location.href = "Debat_tekst.html";
  });
}

/* =========================
    DEBAT_TEKST.HTML – VOLGENDE KNOP  en vorige
========================= */

const debat_tekst_volgende = document.getElementById("debat_tekst_volgende");
if (debat_tekst_volgende) {
  debat_tekst_volgende.addEventListener("click", function () {
    window.location.href = "Debat_opdracht1.html";
  });
}

/*==============
Debat opdracht 1 volgende knop
=================*/
const debat_opdracht1_volgende = document.getElementById("debatopdracht1_volgende");
if (debat_opdracht1_volgende) {
  debat_opdracht1_volgende.addEventListener("click", function () {
    window.location.href = "Debat_tekstweghalen.html";
  });
}
/* ===============
  tekst weghalen vorige
================= */

const tekstweghalen_vorige = document.getElementById("tekstweghalen_vorige");
if (tekstweghalen_vorige) {
  tekstweghalen_vorige.addEventListener("click", function () {  
    window.location.href = "Debat_opdracht1.html";
  });
}

const tekstweghalen_volgende = document.getElementById("tekstweghalen_volgende");
if (tekstweghalen_volgende) {
  tekstweghalen_volgende.addEventListener("click", function () {
    window.location.href = "Debat_tekst_2.html";
  });
}

const checkbox = document.getElementById("begrijp_check_tekst");
const button = document.getElementById("tekstweghalen_volgende");

if (checkbox && button) {
  checkbox.addEventListener("change", () => {
    button.disabled = !checkbox.checked;
  });
}

console.log(checkbox, button);

/* ===============
modal
================= */
const openBtn = document.getElementById("Debat_tekst_2_volgende");
const modal = document.getElementById("modal_lezen");
const naarOpdracht = document.getElementById("naar_opdracht");

if (openBtn && modal) {
  openBtn.onclick = () => modal.hidden = false;

  modal.onclick = (e) => {
    if (e.target.dataset.close !== undefined) {
      modal.hidden = true;
    }
  };
}

if (naarOpdracht) {
  naarOpdracht.onclick = () => {
    window.location.href = "Debat_1.html";
  };
}

/* ================
Antwoord optie display in tekstwolkje + enable Volgende when ready
===============*/document.addEventListener("DOMContentLoaded", () => {

  const speechHint = document.querySelector(".speech_hint");
  const radios = document.querySelectorAll('input[name="teamA_reason"]');

  const yesBtn = document.querySelector(".speech_btn_yes");
  const noBtn = document.querySelector(".speech_btn_no");
  const nextBtn = document.getElementById("debat_begin_volgende");

  // If this page doesn't contain these elements, safely exit
  if (!speechHint || radios.length === 0 || !yesBtn || !noBtn || !nextBtn) return;

  // Start disabled
  nextBtn.disabled = true;

  function updateButtonState() {
    const speechSelected =
      yesBtn.classList.contains("active") ||
      noBtn.classList.contains("active");

    const radioSelected = Array.from(radios).some(r => r.checked);

    nextBtn.disabled = !(speechSelected && radioSelected);
  }

  // Radio change → update speech bubble text
  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const label = e.target.closest(".answer");
      const text = label.querySelector(".answer_text").textContent.trim();

      speechHint.textContent = text;
      speechHint.style.fontStyle = "normal";

      updateButtonState();
    });
  });

  // Wel button
  yesBtn.addEventListener("click", () => {
    yesBtn.classList.add("active");
    noBtn.classList.remove("active");
    updateButtonState();
  });

  // Niet button
  noBtn.addEventListener("click", () => {
    noBtn.classList.add("active");
    yesBtn.classList.remove("active");
    updateButtonState();
  });

  // Save selection + navigate
  nextBtn.addEventListener("click", () => {

    const speechChoice = yesBtn.classList.contains("active") ? "wel" : "niet";

    const checkedRadio = Array.from(radios).find(r => r.checked);

    let reasonText = "";
    if (checkedRadio) {
      const label = checkedRadio.closest(".answer");
      reasonText = label.querySelector(".answer_text").textContent.trim();
    }

    // Store values for next page
    localStorage.setItem("debate_speech_choice", speechChoice);
    localStorage.setItem("debate_reason_text", reasonText);

    window.location.href = "Debat_tegenreactie.html";
  });

});