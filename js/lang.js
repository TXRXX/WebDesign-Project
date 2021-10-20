const lang = document.querySelector(".slide");
const switchLang = document.getElementById("selected-lang");
const home = document.querySelector(".home");
const about = document.querySelectorAll(".about");
const education = document.querySelectorAll(".education");
const admission = document.getElementById("admission");
const admission2 = document.getElementById("admission2");
const admins = document.querySelector(".admins");
const tcs = document.getElementById("T-CS");
const tit = document.getElementById("T-IT");
const tgis = document.getElementById("T-GIS");
const service = document.getElementById("service");
const round2 = document.getElementById("round2");
const round22 = document.getElementById("round2-2");
const round3 = document.getElementById("round3");
const researchGroup = document.getElementById("researchGroup");
const MOU = document.getElementById("MOU");
const contact = document.getElementById("contact");
const weltext = document.getElementById("wel-text");
const history = document.querySelector(".history");


const personnel = document.querySelectorAll(".personnel");
const syllabus = document.querySelectorAll(".syllabus");
const scholarship = document.querySelectorAll(".scholarship");
const calendar = document.querySelectorAll(".calendar");
const grad = document.querySelectorAll(".grad");


const bachelorText = document.querySelectorAll(".bachelor-text");
const masterText = document.querySelectorAll(".master-text");
const doctorText = document.querySelectorAll(".doctor-text");
const research = document.querySelectorAll(".research");



let arrow = document.createElement("i");
arrow.classList.add("fas", "fa-caret-right");

let thai = false;

lang.addEventListener("click", () => {
  if (thai) {
    document.querySelector(".slider").style.left = "3px";
    switchLang.textContent = "TH";
    home.textContent = "หน้าหลัก";
    admission.textContent = "การรับเข้าศึกษา";
    admission2.textContent = "การรับเข้าศึกษา";
    admins.textContent = "คณะผู้บริหาร";
    tcs.textContent = "คณาจารย์ประจำหลักสูตร CS";
    tit.textContent = "คณาจารย์ประจำหลักสูตร IT";
    tgis.textContent = "คณาจารย์ประจำหลักสูตร GIS";
    service.textContent = "บริการการศึกษา";
    researchGroup.textContent = "ศูนย์วิจัยและกลุ่มวิจัย";
    MOU.textContent = "ความร่วมมือ MOU";
    contact.textContent = "ติดต่อ";
    history.textContent = "ประวัติ";
    researchGroup.textContent = "งานวิจัย";


    changeTextAndAddArrow(personnel, "บุคลากร");
    changeTextAndAddArrow(syllabus, "หลักสูตร");
    changeTextAndAddArrow(scholarship, "ทุนการศึกษา");
    changeTextAndAddArrow(calendar, "ปฏิทินการศึกษา");

    changeText(bachelorText, "ระดับปริญญาตรี");
    changeText(masterText, "ระดับปริญญาโท");
    changeText(doctorText, "ระดับปริญญาเอก");
    changeText(research, "งานวิจัย");
    changeText(grad, "ระดับบัณฑิตศึกษา");
    changeText(about, "เกี่ยวกับ");
    changeText(education, "การศึกษา");
  } else {
    document.querySelector(".slider").style.left = "29px";
    switchLang.textContent = "EN";
    home.textContent = "HOME";
    admission.textContent = "ADDMISSION";
    admission2.textContent = "ADDMISSION";
    admins.textContent = "ADMINISTRATORS";
    tcs.textContent = "TEACHING STAFF IN CS";
    tit.textContent = "TEACHING STAFF IN IT";
    tgis.textContent = "TEACHING STAFF IN GIS";
    service.textContent = "SERVICE";
    researchGroup.textContent = "RESEARCH GROUP";
    MOU.textContent = "MOU";
    contact.textContent = "CONTACT";
    history.textContent = "HISTORY";


    changeTextAndAddArrow(personnel, "PERSONNEL");
    changeTextAndAddArrow(syllabus, "SYLLABUS");
    changeTextAndAddArrow(scholarship, "SCHOLARSHIP");
    changeTextAndAddArrow(calendar, "CALENDAR");

    changeText(bachelorText, "BACHELOR'S DEGREE");
    changeText(masterText, "MASTER'S DEGREE");
    changeText(doctorText, "DOCTOR'S DEGREE");
    changeText(research, "RESEARCH");
    changeText(grad, "GRADUATE STUDENTS");
    changeText(about, "ABOUT");
    changeText(education, "EDUCATION");
  }
  thai = !thai;
})

const changeTextAndAddArrow = (array, textChange) => {
  for (let i=0; i<array.length; i++) {
    array[i].textContent = textChange;
    array[i].appendChild(arrow.cloneNode(true));
  }
}

const changeText = (array, textNew) => {
  for (let i=0; i<array.length; i++) {
    array[i].textContent = textNew;
  }
}