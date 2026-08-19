const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("open");
});

const translations = {
  it: {
    home: "Home",
    about: "Chi Siamo",
    shop: "Shop",
    contact: "Contattaci",
    reserve: "Prenota"
  },
  en: {
    home: "Home",
    about: "About Us",
    shop: "Shop",
    contact: "Contact Us",
    reserve: "Reserve"
  }
};

const langSwitch = document.getElementById("lang-switch");
let currentLang = "it";

langSwitch.addEventListener("click", (e) => {
  e.preventDefault();
  currentLang = currentLang === "it" ? "en" : "it";

  // Cambia il testo del bottone
  langSwitch.textContent = currentLang === "it" ? "English" : "Italiano";

  // Aggiorna tutti gli elementi con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
});

