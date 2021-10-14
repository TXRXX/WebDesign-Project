const lang = document.querySelector(".slide");
const switchLang = document.getElementById("selected-lang");
const home = document.getElementById("home");
const about = document.getElementById("about");
let thai = false;

lang.addEventListener("click", () => {
  if (thai) {
    document.querySelector(".slider").style.left = "3px";
    switchLang.textContent = "TH";
    home.textContent = "หน้าหลัก";
    about.textContent = "เกี่ยวกับ";
  } else {
    document.querySelector(".slider").style.left = "29px";
    switchLang.textContent = "EN";
    home.textContent = "HOME";
    about.textContent = "ABOUT";

  }
  thai = !thai;
})

