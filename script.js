const toggleBtn = document.getElementById("langToggle");
const htmlRoot = document.getElementById("htmlRoot");

let currentLang = localStorage.getItem("lang") || "ar";
applyLanguage(currentLang);

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  localStorage.setItem("lang", currentLang);
  applyLanguage(currentLang);
});

function applyLanguage(lang){
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  htmlRoot.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  toggleBtn.textContent = lang === "ar" ? "EN 🌐" : "AR 🌐";
}
