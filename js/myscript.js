const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("open");
});

const translations = {
  it: {
    services: "Servizi",
    howItWorks: "Come Funziona",
    prices: "Prezzi",
    contact: "Contatti",
    reserve: "Prenota",
    whatsapp: "Contattaci su WhatsApp",
    call_now: "Chiama Ora",
    feat_products: "Prodotti professionali",
    feat_power: "Acqua e corrente autonome",
    feat_location: "Roma e provincia (30 km)",
    title_text: "Il tuo auto detailing a domicilio",
    text: "Veniamo noi da te, a casa o in ufficio, con van attrezzato, acqua e corrente autonome. Tu non sposti l'auto: la ritrovi come nuova."
  },
  en: {
    services: "Services",
    howItWorks: "How It Works",
    prices: "Prices",
    contact: "Contact Us",
    reserve: "Reserve",
    whatsapp: "Contact us on WhatsApp",
    call_now: "Call Now",
    feat_products: "Professional products",
    feat_power: "Autonomous water & power",
    feat_location: "Rome & province (30 km)",
    title_text: "Your mobile car detailing service",
    text:"We come to you at home or the office in a fully equipped van with its own water and power supply. You don't have to move your car; you'll find it looking like new."
  }
};

const langSwitch = document.getElementById("lang-switch");
let currentLang = "it";

// Funzione per gestire il titolo con lo span dorato
function updateTitle() {
  const titleEl = document.getElementById("title_text");
  const title = translations[currentLang].title_text;

  if (currentLang === "it") {
    // Ricostruisce il titolo con lo span dorato
    titleEl.innerHTML = `Il tuo auto detailing <span class="gold">a domicilio</span>`;
  } else {
    // Inglese → testo normale
    titleEl.textContent = title;
  }
}

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

  // Aggiorna il titolo con lo span dorato
  updateTitle();
});

// Imposta il titolo iniziale
updateTitle();
