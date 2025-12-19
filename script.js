const toggleBtn = document.getElementById("langToggle");
const htmlRoot = document.getElementById("htmlRoot");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navbar ul");

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

  htmlRoot.setAttribute("lang", lang);
  htmlRoot.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  toggleBtn.querySelector(".lang-text").textContent = lang === "ar" ? "EN" : "AR";
}

// Hamburger Menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});
