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
    text: "Veniamo noi da te, a casa o in ufficio, con van attrezzato, acqua e corrente autonome. Tu non sposti l'auto: la ritrovi come nuova.",
    section_subtitle: "Cosa facciamo",
    section_title: "Servizi",

    srv1_title: "LAVAGGIO ESTERNO A MANO",
    srv1_text: "Prelavaggio a schiuma attiva, lavaggio a due secchi e asciugatura in microfibra.",

    srv2_title: "IGIENIZZAZIONE INTERNI",
    srv2_text: "Aspirazione profonda, pulizia plastiche, tessuti e pelle con prodotti pH neutro.",

    srv3_title: "LUCIDATURA E CORREZIONE",
    srv3_text: "Rimozione di micrograffi e olografie con polisher rotorbitale.",

    srv4_title: "CERA E SEALANT",
    srv4_text: "Protezione idrorepellente che esalta il colore e dura mesi.",

    srv5_title: "TRATTAMENTO VETRI",
    srv5_text: "Idrorepellenza e visibilità migliorata in caso di pioggia.",

    srv6_title: "RIMOZIONE ODORI",
    srv6_text: "Sanificazione con prodotti professionali e neutralizzatori.",
    howItWorks_title: "Come funziona",

    srv7_title: "Prenoti",
    srv7_text: "Scrivi su WhatsApp o compila il form: ti confermiamo data e ora.",

    srv8_title: "Arriviamo da te",
    srv8_text: "Van attrezzato con acqua e corrente autonome, casa o ufficio.",

    srv9_title: "Lavoriamo sul posto",
    srv9_text: "Da 1 a 6 ore secondo il pacchetto, senza spostare l'auto.",

    srv10_title: "Auto reborn",
    srv10_text: "Controllo finale insieme a te e consegna con l'auto come nuova."


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
    text:"We come to you at home or the office in a fully equipped van with its own water and power supply. You don't have to move your car; you'll find it looking like new.",
    section_subtitle: "What we do",
    section_title: "Services",

    srv1_title: "HAND WASH EXTERIOR",
    srv1_text: "Active foam pre-wash, two-bucket wash and microfiber drying.",

    srv2_title: "INTERIOR SANITIZATION",
    srv2_text: "Deep vacuuming, cleaning plastics, fabrics and leather with pH-neutral products.",

    srv3_title: "POLISHING & PAINT CORRECTION",
    srv3_text: "Removal of micro-scratches and holograms with dual-action polisher.",

    srv4_title: "WAX & SEALANT",
    srv4_text: "Hydrophobic protection that enhances color and lasts for months.",

    srv5_title: "GLASS TREATMENT",
    srv5_text: "Hydrophobic effect and improved visibility in rain.",

    srv6_title: "ODOR REMOVAL",
    srv6_text: "Sanitization with professional products and neutralizers.",
    howItWorks_title: "How it works",

    srv7_title: "Book your service",
    srv7_text: "Write on WhatsApp or fill out the form: we confirm date and time.",

    srv8_title: "We come to you",
    srv8_text: "Fully equipped van with autonomous water and power, home or office.",

    srv9_title: "We work on-site",
    srv9_text: "From 1 to 6 hours depending on the package, without moving the car.",

    srv10_title: "Auto reborn",
    srv10_text: "Final check together and delivery with your car looking like new."


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
