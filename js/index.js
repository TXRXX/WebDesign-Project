let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector("#wel-text").innerHTML = "ยินดีต้อนรับสู่<br>วิทยาลัยการคอมพิวเตอร์";
    document.querySelector("#news-ql").textContent = "ข่าวสาร";
    document.querySelector("#admission-ql").textContent = "การสอบเข้า";
    document.querySelector("#calendar-ql").textContent = "ปฏิทิน";
    document.querySelector("#research-ql").textContent = "วิจัย";
    document.querySelector(".head-text").textContent = "ข่าวประชาสัมพันธ์";
    document.querySelector(".viewallnews").textContent = "ดูข่าวทั้งหมด";
    document.querySelector(".readmore").textContent = "อ่านเพิ่มเติม";
  } else {
    document.querySelector("#wel-text").innerHTML = "WELCOME TO<br>COLLEGE OF COMPUTING";
    document.querySelector("#news-ql").textContent = "NEWS";
    document.querySelector("#admission-ql").textContent = "ADMISSION";
    document.querySelector("#calendar-ql").textContent = "CALENDAR";
    document.querySelector("#research-ql").textContent = "RESEARCH";
    document.querySelector(".head-text").textContent = "NEWS";
    document.querySelector(".viewallnews").textContent = "VIEW ALL NEWS";
    document.querySelector(".readmore").textContent = "READ";
  }
  isThai = !isThai;
});