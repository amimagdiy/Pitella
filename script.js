const toggleBtn = document.getElementById("langToggle");
const htmlRoot = document.getElementById("htmlRoot");

// default language
let currentLang = localStorage.getItem("lang") || "en";

// apply language on load
applyLanguage(currentLang);

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  localStorage.setItem("lang", currentLang);
  applyLanguage(currentLang);
});

function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-en]");

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  if (lang === "ar") {
    htmlRoot.setAttribute("lang", "ar");
    htmlRoot.setAttribute("dir", "rtl");
    toggleBtn.textContent = "EN";
  } else {
    htmlRoot.setAttribute("lang", "en");
    htmlRoot.setAttribute("dir", "ltr");
    toggleBtn.textContent = "AR";
  }
}
