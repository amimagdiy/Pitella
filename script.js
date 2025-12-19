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

  if(lang==="ar"){
    htmlRoot.setAttribute("lang","ar");
    htmlRoot.setAttribute("dir","rtl");
    toggleBtn.textContent="EN";
  }else{
    htmlRoot.setAttribute("lang","en");
    htmlRoot.setAttribute("dir","ltr");
    toggleBtn.textContent="AR";
  }
}
