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
    window.location.href = "Debat_Begin.html";
  };
}
/* ================
Debat_begin (radio-only): update bubble + enable Volgende when a radio is chosen
===============*/
document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("debat_begin_volgende");
  if (!nextBtn) return; // not on Debat_begin

  // Prefer a specific ID if you have it; otherwise first .speech_hint
  const hintEl =
    document.getElementById("teamA_begin_hint") ||
    document.querySelector(".speech .speech_hint") ||
    document.querySelector(".speech_hint");

  // Grab radios either by name OR by class (covers both setups)
  const radios = document.querySelectorAll(
    'input[name="teamA_reason"], .answers_fieldset input[type="radio"]'
  );

  if (!hintEl || radios.length === 0) return;

  nextBtn.disabled = true;

  function updateButtonState() {
    nextBtn.disabled = !Array.from(radios).some(r => r.checked);
  }

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const label = e.target.closest(".answer") || e.target.closest("label");
      const text =
        label?.querySelector(".answer_text")?.textContent?.trim() ||
        label?.textContent?.trim() ||
        "";

      hintEl.textContent = text;
      hintEl.style.fontStyle = "normal";

      updateButtonState();
    });
  });

  nextBtn.addEventListener("click", () => {
    const checkedRadio = Array.from(radios).find(r => r.checked);
    if (!checkedRadio) return;

    const label = checkedRadio.closest(".answer") || checkedRadio.closest("label");
    const reasonText =
      label?.querySelector(".answer_text")?.textContent?.trim() ||
      label?.textContent?.trim() ||
      "";

    localStorage.setItem("debate_reason_text", reasonText);
    localStorage.setItem("debate_reason_value", checkedRadio.value || "");

    window.location.href = "Debat_tegenreactie.html";
  });

  updateButtonState();
});

/* ================
Pages AFTER Debat_begin: show locked Team A answer (radio-only)
===============*/
document.addEventListener("DOMContentLoaded", () => {
  const lockedReasonEl = document.getElementById("teamA_locked_reason");
  if (!lockedReasonEl) return;

  const reasonText = localStorage.getItem("debate_reason_text");
  if (reasonText) {
    lockedReasonEl.textContent = reasonText;
    lockedReasonEl.style.fontStyle = "normal";
  }
});


/* ================
Debat_tegenreactie: Volgende -> Debat_reageren
===============*/
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("debat_tegenreactie_volgende");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.location.href = "Debat_reageren.html";
  });
});


/* ================
Debat_reageren: enable Volgende after choosing an option
===============*/
document.addEventListener("DOMContentLoaded", () => {
  const reagerenForm = document.getElementById("reageren_form");
  const reagerenHint = document.getElementById("reageren_hint");
  const nextBtn = document.getElementById("debat_reageren_volgende");

  // Not on Debat_reageren? exit safely.
  if (!reagerenForm || !reagerenHint || !nextBtn) return;

  nextBtn.disabled = true;
  reagerenHint.textContent = "selecteer het juiste antwoord";
  reagerenHint.style.fontStyle = "italic";

  const radios = reagerenForm.querySelectorAll('input[name="reageren_reason"]');

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const label = e.target.closest(".answer");
      const text = label.querySelector(".answer_text").textContent.trim();

      // show chosen option in bubble (optional)
      reagerenHint.textContent = text;

      reagerenHint.style.fontStyle = "normal";
      nextBtn.disabled = false;

      localStorage.setItem("debate_reageren_choice_text", text);
      localStorage.setItem("debate_reageren_choice_value", e.target.value);
    });
  });

  nextBtn.addEventListener("click", () => {
    window.location.href = "Debat_stelling2.html"; // change this
  });
});

/* ================
Debat_reageren: swap answer option texts based on Debat_begin choice (a1/a2 vs a3/a4)
===============*/
document.addEventListener("DOMContentLoaded", () => {
  const reagerenForm = document.getElementById("reageren_form");
  if (!reagerenForm) return;

  const reasonValue = localStorage.getItem("debate_reason_value"); // "a1".."a4"
  const isWelGroep = (reasonValue === "a1" || reasonValue === "a2");

  const optionTextsWel = [
    "Dat klopt, maar wij vinden nog steeds dat het regenboogdieet betrouwbaar is, want je eet veel verschillende gezonde producten.",
    "Je hebt gelijk, daardoor is het regenboogdieet eigenlijk helemaal niet gezond",
    "Je mist inderdaad sommige voedingsstoffen, maar het regenboogdieet kan wel een goede basis zijn als je daarnaast andere producten eet zoals zuivel of granen",
    "Maar verschillende kleuren eten kan gezien worden als iets leuks, wat gezond eten beter vol te houden maakt"
  ];

  const optionTextsNiet = [
    "Dat is waar, maar ik blijf erbij dat het dieet niet betrouwbaar is, want het mist belangrijke voedingsstoffen.",
    "Je hebt geen gelijk want het regenboogdieet is niet betrouwbaar",
    "Misschien, maar kleuren zeggen niks over gezondheid",
    "Groenten en fruit zijn gezond, maar het is belangrijker dat een dieet makkelijk te volgen is"
  ];

  const textsToUse = isWelGroep ? optionTextsWel : optionTextsNiet;

  // Replace the 4 option texts in the existing HTML
  const spans = reagerenForm.querySelectorAll(".answer_text");
  spans.forEach((span, i) => {
    if (textsToUse[i]) span.textContent = textsToUse[i];
  });

  // Reset selection + disable next (prevents stale selection after text swap)
  const nextBtn = document.getElementById("debat_reageren_volgende");
  const hintEl = document.getElementById("reageren_hint");
  const radios = reagerenForm.querySelectorAll('input[name="reageren_reason"]');

  radios.forEach(r => (r.checked = false));
  if (nextBtn) nextBtn.disabled = true;
  if (hintEl) {
    hintEl.textContent = "selecteer het juiste antwoord";
    hintEl.style.fontStyle = "italic";
  }
});

/* ================
Set Team B tegenreactie text (Debat_tegenreactie + Debat_reageren)
===============*/
document.addEventListener("DOMContentLoaded", () => {
  const teamBTextEl = document.getElementById("teamB_tegenreactie_text");
  if (!teamBTextEl) return;

  const reasonValue = localStorage.getItem("debate_reason_value"); // "a1".."a4"
  console.log("TeamB tegenreactie reasonValue =", reasonValue);

  const tegenreactie_wel =
    "Je krijgt wel veel vitamines binnen, maar als je alleen regenboogkleuren eet, mis je belangrijke dingen zoals eiwitten en vitamine B12";

  const tegenreactie_niet =
    "Maar het regenboogdieet helpt je wél om veel gezonde groenten en fruit te eten. Die zitten vol vitamines die je lichaam nodig heeft. Het kan dus nog steeds heel gezond zijn";

  const isWelGroep = (reasonValue === "a1" || reasonValue === "a2");

  teamBTextEl.textContent = isWelGroep ? tegenreactie_wel : tegenreactie_niet;
  teamBTextEl.style.fontStyle = "normal";
});

// =============================
// STAP 2 - Zinnen klikbaar maken
// Alleen actief binnen #markeertekst
// =============================

function splitIntoSentences(text) {
  const matches = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  return matches ? matches.map(s => s.trim()).filter(Boolean) : [text];
}

function maakZinnenKlikbaar() {
  const container = document.getElementById("markeertekst");
  if (!container) return;

  const paragrafen = container.querySelectorAll(".leestekst_paragraph");

  paragrafen.forEach(p => {
    const origineleTekst = p.textContent.trim();
    if (!origineleTekst) return;

    const zinnen = splitIntoSentences(origineleTekst);

    p.innerHTML = "";

    zinnen.forEach(zin => {
      const span = document.createElement("span");
      span.className = "zin";
    span.dataset.zinId = `${Date.now()}-${Math.random()}`;
    span.textContent = zin + " ";
      p.appendChild(span);
    });
  });
}

// uitvoeren
maakZinnenKlikbaar();

// =============================
// STAP 4 - Invulvak -> zin kiezen (VOOR = groen, TEGEN = rood/roze)
// =============================

let actiefInvulvak = null;

// 1) Klik op invulvak: zet actief (voor én tegen)
document.querySelectorAll(".invulvak").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".invulvak").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    actiefInvulvak = btn;
  });
});

// 2) Klik op zin: alleen als er een invulvak actief is
document.addEventListener("click", (e) => {
  const zinEl = e.target.closest("#markeertekst .zin");
  if (!zinEl) return;
  if (!actiefInvulvak) return;

  const side = actiefInvulvak.dataset.side;
  const highlightClass = side === "tegen"
    ? "is-highlight-tegen"
    : "is-highlight-voor";

  const huidigeZinId = zinEl.dataset.zinId;
  const oudeZinId = actiefInvulvak.dataset.selectedId;

  const isAlGemarkeerd =
    zinEl.classList.contains("is-highlight-voor") ||
    zinEl.classList.contains("is-highlight-tegen");

  // Als de zin al gemarkeerd is door een ander vak: niets doen
  if (isAlGemarkeerd && oudeZinId !== huidigeZinId) {
    return;
  }

  // Als dezelfde zin opnieuw wordt aangeklikt: selectie verwijderen
  if (oudeZinId === huidigeZinId) {
    zinEl.classList.remove("is-highlight-voor");
    zinEl.classList.remove("is-highlight-tegen");

    actiefInvulvak.textContent = "Klik om een zin te markeren uit de tekst";
  actiefInvulvak.classList.remove("filled");
  actiefInvulvak.dataset.selectedId = "";
  updateVolgendeKnop();
  return;
  }

  // Oude highlight verwijderen als er al een zin gekozen was
  if (oudeZinId) {
    const oudeZinEl = document.querySelector(
      `#markeertekst .zin[data-zin-id="${oudeZinId}"]`
    );
    if (oudeZinEl) {
      oudeZinEl.classList.remove("is-highlight-voor");
      oudeZinEl.classList.remove("is-highlight-tegen");
    }
  }

  // Nieuwe highlight toepassen
  zinEl.classList.add(highlightClass);

  actiefInvulvak.textContent = zinEl.textContent.trim();
  actiefInvulvak.dataset.selectedId = huidigeZinId;
  actiefInvulvak.classList.add("filled");
  updateVolgendeKnop();
  });

// Controleer of alle argument-vakken gevuld zijn voor volgende knop
function updateVolgendeKnop() {
  const nextBtn = document.getElementById("debatopdracht1_volgende");
  if (!nextBtn) return;

  const panel = document.querySelector(".opdracht_panel");
  if (!panel) return;

  const alleVakken = panel.querySelectorAll(".invulvak");

  const allesGevuld = Array.from(alleVakken).every((vak) => {
    return vak.classList.contains("filled") && vak.dataset.selectedId && vak.dataset.selectedId !== "";
  });

  nextBtn.disabled = !allesGevuld;
}

updateVolgendeKnop();
/*===============================
team kiezen
===============================*/
// Stap 1: keuze opslaan op de startpagina (groep A/B)
(function () {
  const form = document.getElementById("templateForm");
  const nextBtn = document.getElementById("debat_index_volgende");
  if (!form || !nextBtn) return; // Alleen uitvoeren op deze pagina

  form.addEventListener("change", () => {
    const checked = form.querySelector('input[name="template"]:checked');
    if (!checked) return;

    // We slaan A of B op (simpel en duidelijk)
    const group =
      checked.closest("label")?.querySelector(".choice_label")?.textContent?.trim() === "Groep A"
        ? "A"
        : "B";

    localStorage.setItem("debatTeam", group);

    nextBtn.disabled = false;
  });
})();

// Stap 2: juiste team-afbeelding tonen op andere pagina's
// Juiste team-afbeelding tonen
(function () {
  const img = document.getElementById("team_A_img");
  if (!img) return;

  const team = localStorage.getItem("debatTeam"); // "A" of "B"

  if (team === "B") {
    img.src = "../img/Team_jeff_praat.svg";
    img.alt = "Team Jeff";
  } else {
    img.src = "../img/Team A_Praat.svg";
    img.alt = "Team A";
  }
})();

/* ==========================================
   DEBAT RONDE 2 – COMPLETE FUNCTIONALITEIT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     DEBAT_STELLING2
  =============================== */
  const stelling2Btn = document.getElementById("debat_stelling2_volgende");

  if (stelling2Btn) {

    const hintEl =
      document.getElementById("teamA_begin_hint") ||
      document.querySelector(".speech .speech_hint") ||
      document.querySelector(".speech_hint");

    const radios = document.querySelectorAll(
      'input[name="teamA_reason"], .answers_fieldset input[type="radio"]'
    );

    stelling2Btn.disabled = true;

    function updateButtonState() {
      stelling2Btn.disabled = !Array.from(radios).some(r => r.checked);
    }

    radios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        const label = e.target.closest(".answer") || e.target.closest("label");
        const text =
          label?.querySelector(".answer_text")?.textContent?.trim() ||
          label?.textContent?.trim() ||
          "";

        if (hintEl) {
          hintEl.textContent = text;
          hintEl.style.fontStyle = "normal";
        }

        updateButtonState();
      });
    });

    stelling2Btn.addEventListener("click", () => {
      const checkedRadio = Array.from(radios).find(r => r.checked);
      if (!checkedRadio) return;

      const label = checkedRadio.closest(".answer") || checkedRadio.closest("label");
      const reasonText =
        label?.querySelector(".answer_text")?.textContent?.trim() ||
        label?.textContent?.trim() ||
        "";

      localStorage.setItem("debate2_reason_text", reasonText);
      localStorage.setItem("debate2_reason_value", checkedRadio.value || "");

      window.location.href = "Debat_2_tegenreactie.html";
    });

    updateButtonState();
  }


  /* ===============================
     DEBAT_2_TEGENREACTIE
  =============================== */
  if (document.body.dataset.page === "debat2-tegenreactie") {

    const teamALockedEl = document.getElementById("teamA_locked_reason");
    const teamBTextEl = document.getElementById("teamB_tegenreactie_text");
    const answersForm = document.querySelector(".answers");

    const savedText = localStorage.getItem("debate2_reason_text");
    const savedValue = localStorage.getItem("debate2_reason_value");

    // Team A gekozen antwoord tonen
    if (teamALockedEl) {
      teamALockedEl.textContent = savedText || "...";
      teamALockedEl.style.fontStyle = "normal";
    }

    // Oude opties verbergen
    if (answersForm) {
      answersForm.style.display = "none";
    }

    // Team B kip / vis tonen
    if (teamBTextEl) {
      if (savedValue === "a1" || savedValue === "a2") {
        teamBTextEl.textContent = "kip";
      } else if (savedValue === "a3" || savedValue === "a4") {
        teamBTextEl.textContent = "vis";
      } else {
        teamBTextEl.textContent = "";
      }

      teamBTextEl.style.fontStyle = "normal";
    }
  }

});

/* ===============================
DEBAT 2 – REAGEREN (opties wisselen + volgende activeren)
=============================== */
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.page !== "debat2-reageren") return;

  const form = document.getElementById("reageren_form");
  const hintEl = document.getElementById("reageren_hint");
  const nextBtn = document.getElementById("debat2_reageren_volgende");
  const teamALockedEl = document.getElementById("teamA_locked_reason");
  const teamBTextEl = document.getElementById("teamB_tegenreactie_text");

  if (!form || !hintEl || !nextBtn) return;

  // Team A locked (uit ronde 2 stelling)
  const savedAtext = localStorage.getItem("debate2_reason_text");
  if (teamALockedEl) {
    teamALockedEl.textContent = savedAtext || "...";
    teamALockedEl.style.fontStyle = "normal";
  }

  // Team B tegenreactie tonen (optioneel)
  const savedAvalue = localStorage.getItem("debate2_reason_value"); // a1..a4
  const isA12 = (savedAvalue === "a1" || savedAvalue === "a2");
  if (teamBTextEl) {
    teamBTextEl.textContent = isA12 ? "kip" : "vis";
    teamBTextEl.style.fontStyle = "normal";
  }

  // Antwoordopties wisselen
  const textsA12 = ["test 1", "test 2", "test 3", "test 4"];
  const textsA34 = ["la", "tra", "qa", "ma"];
  const textsToUse = isA12 ? textsA12 : textsA34;

  const spans = form.querySelectorAll(".answer_text");
  spans.forEach((span, i) => {
    if (textsToUse[i]) span.textContent = textsToUse[i];
  });

  // Init state
  nextBtn.disabled = true;
  hintEl.textContent = "selecteer het juiste antwoord";
  hintEl.style.fontStyle = "italic";

  const radios = form.querySelectorAll('input[name="reageren_reason"]');
  radios.forEach(r => (r.checked = false));

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const label = e.target.closest(".answer") || e.target.closest("label");
      const text =
        label?.querySelector(".answer_text")?.textContent?.trim() ||
        label?.textContent?.trim() ||
        "";

      hintEl.textContent = text;
      hintEl.style.fontStyle = "normal";
      nextBtn.disabled = false;

      localStorage.setItem("debate2_reageren_choice_text", text);
      localStorage.setItem("debate2_reageren_choice_value", e.target.value);
    });
  });

  nextBtn.addEventListener("click", () => {
    // Pas dit aan naar jouw volgende Debat 2 pagina
    window.location.href = "Debat_2_volgende_pagina.html";
  });
});

/* ===============================
Debat_2_tegenreactie: Volgende -> Debat_2_reageren.html
=============================== */
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.page !== "debat2-tegenreactie") return;

  const btn = document.getElementById("debat_tegenreactie_volgende");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.location.href = "Debat_2_reageren.html";
  });
});