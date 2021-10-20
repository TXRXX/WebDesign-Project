const lang = document.querySelector(".slide");
const switchLang = document.getElementById("selected-lang");
const home = document.getElementsByClassName("home");
const about = document.getElementById("about");
const about2 = document.getElementById("about2");
const education = document.getElementById("education");
const education2 = document.getElementById("education2");
const admission = document.getElementById("admission");
const admission2 = document.getElementById("admission2");
const admins = document.getElementById("admins");
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
const history = document.getElementById("history");

// const research = document.getElementById("research");


const bachelor = document.querySelectorAll("#bachelor");
const personnel = document.querySelectorAll("#personnel");
const syllabus = document.querySelectorAll("#syllabus");
const scholarship = document.querySelectorAll("#scholarship");
const calendar = document.querySelectorAll("#calendar");


const bachelorText = document.querySelectorAll("#bachelor-text");
const masterText = document.querySelectorAll("#master-text");
const doctorText = document.querySelectorAll("#doctor-text");
const research = document.querySelectorAll("#research");



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
    // document.getElementById("history-th").src="./img/banner/history_th.jpg";
    // research.textContent = "งานวิจัย";
    // weltext.innerHTML = "ยินดีต้อนรับสู่<br>วิทยาลัยการคอมพิวเตอร์";
    // weltext.textContent = "ยินดีต้อนรับสู่ \r\n วิทยาลัยการคอมพิวเตอร์";


    changeTextAndAddArrow(bachelor, "ระดับปริญญาตรี");
    changeTextAndAddArrow(personnel, "บุคลากร");
    changeTextAndAddArrow(syllabus, "หลักสูตร");
    changeTextAndAddArrow(scholarship, "ทุนการศึกษา");
    changeTextAndAddArrow(calendar, "ปฏิทินการศึกษา");

    changeText(bachelorText, "ระดับปริญญาตรี");
    changeText(masterText, "ระดับปริญญาโท");
    changeText(doctorText, "ระดับปริญญาเอก");
    changeText(research, "งานวิจัย");
    changeText(grad, "ระดับบัณฑิตศึกษา");
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
    admins.textContent = "ADMINISTRATORS";
    tcs.textContent = "TEACHING STAFF IN CS";
    tit.textContent = "TEACHING STAFF IN IT";
    tgis.textContent = "TEACHING STAFF IN GIS";
    service.textContent = "SERVICE";
    researchGroup.textContent = "RESEARCH GROUP";
    MOU.textContent = "MOU";
    contact.textContent = "CONTACT";
    history.textContent = "HISTORY";
    // document.getElementById("history-th").src="./img/banner/history_en.jpg";
    // research.textContent = "RESEARCH";
    // weltext.innerHTML = "WELCOME TO<br>COLLEGE OF COMPUTING";
    // weltext.textContent = "WELCOME TO\r\nCOLLEGE OF COMPUTING";


    changeTextAndAddArrow(bachelor, "BACHELOR'S DEGREE");
    changeTextAndAddArrow(personnel, "PERSONNEL");
    changeTextAndAddArrow(syllabus, "SYLLABUS");
    changeTextAndAddArrow(scholarship, "SCHOLARSHIP");
    changeTextAndAddArrow(calendar, "CALENDAR");

    changeText(bachelorText, "BACHELOR'S DEGREE");
    changeText(masterText, "MASTER'S DEGREE");
    changeText(doctorText, "DOCTOR'S DEGREE");
    changeText(research, "RESEARCH");
    changeText(grad, "GRADUATE STUDENTS");
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