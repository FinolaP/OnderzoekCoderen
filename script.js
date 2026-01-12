console.log("JavaScript werkt");

const radios = document.querySelectorAll('input[type="radio"]');
const nextBtn = document.getElementById("nextBtn");

radios.forEach(function (radio) {
  radio.addEventListener("change", function () {
    console.log("Radio geselecteerd:", radio.value);
    nextBtn.disabled = false;
  });
});
