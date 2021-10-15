const lang = document.querySelector(".slide");
const switchLang = document.getElementById("selected-lang");
const home = document.getElementById("home");
const about = document.getElementById("about");
const about2 = document.getElementById("about2");
const education = document.getElementById("education");
const education2 = document.getElementById("education2");
const admission = document.getElementById("admission");
const admission2 = document.getElementById("admission2");
const bachelor = document.querySelectorAll("#bachelor");
const personnel = document.querySelectorAll("#personnel");
const syllabus = document.querySelectorAll("#syllabus");
const scholarship = document.querySelectorAll("#scholarship");
const calendar = document.querySelectorAll("#calendar");

let arrow = document.createElement("i");
arrow.classList.add("fas", "fa-caret-right");

let thai = false;

lang.addEventListener("click", () => {
  if (thai) {
    document.querySelector(".slider").style.left = "3px";
    switchLang.textContent = "TH";
    home.textContent = "หน้าหลัก";
    about.textContent = "เกี่ยวกับ";
    about2.textContent = "เกี่ยวกับ";
    education.textContent = "การศึกษา";
    education2.textContent = "การศึกษา";
    admission.textContent = "การรับเข้าศึกษา";
    admission2.textContent = "การรับเข้าศึกษา";
    changeTextAndAddArrow(bachelor, "ระดับปริญญาตรี");
    changeTextAndAddArrow(personnel, "บุคลากร");
    changeTextAndAddArrow(syllabus, "หลักสูตร");
    changeTextAndAddArrow(scholarship, "ทุนการศึกษา");
    changeTextAndAddArrow(calendar, "ปฏิทินการศึกษา");
  } else {
    document.querySelector(".slider").style.left = "29px";
    switchLang.textContent = "EN";
    home.textContent = "HOME";
    about.textContent = "ABOUT";
    about2.textContent = "ABOUT";
    education.textContent = "EDUCATION";
    education2.textContent = "EDUCATION";
    admission.textContent = "ADDMISSION";
    admission2.textContent = "ADDMISSION";
    changeTextAndAddArrow(bachelor, "BACHELOR'S DEGREE");
    changeTextAndAddArrow(personnel, "PERSONNEL");
    changeTextAndAddArrow(syllabus, "SYLLABUS");
    changeTextAndAddArrow(scholarship, "SCHOLARSHIP");
    changeTextAndAddArrow(calendar, "CALENDAR");
  }
  thai = !thai;
})

const changeTextAndAddArrow = (array, textChange) => {
  for (let i=0; i<array.length; i++) {
    array[i].textContent = textChange;
    array[i].appendChild(arrow.cloneNode(true));
  }
}