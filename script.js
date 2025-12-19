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

  if(lang==="ar"){
    htmlRoot.setAttribute("lang","ar");
    htmlRoot.setAttribute("dir","rtl");
    toggleBtn.querySelector(".lang-text").textContent = "EN";
  }else{
    htmlRoot.setAttribute("lang","en");
    htmlRoot.setAttribute("dir","ltr");
    toggleBtn.querySelector(".lang-text").textContent = "AR";
  }
}

// Hamburger Menu
hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});