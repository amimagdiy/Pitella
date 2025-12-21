const toggleBtn = document.getElementById("langToggle");
const htmlRoot = document.getElementById("htmlRoot");
const navbar = document.querySelector(".navbar");

let currentLang = localStorage.getItem("lang") || "ar";
applyLanguage(currentLang);

toggleBtn.onclick = () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", currentLang);
  applyLanguage(currentLang);
};

function applyLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  htmlRoot.lang = lang;
  htmlRoot.dir = lang === "ar" ? "rtl" : "ltr";
  toggleBtn.textContent = lang === "ar" ? "EN" : "AR";
}

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
