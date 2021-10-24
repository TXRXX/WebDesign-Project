let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > การศึกษา > ปฏิทินการศึกษา > ระดับบัณฑิตศึกษา";
    document.querySelector(".calendar-text").textContent = "ปฏิทินการศึกษา";
    document.getElementById("calendar-th").src="./img/banner/graduatecalendar_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > EDUCATION > CALENDAR > GRADUATE STUDENTS";
    document.querySelector(".calendar-text").textContent = "CALENDAR";
    document.getElementById("calendar-th").src="./img/banner/graduatecalendar_en.jpg";
  }
  isThai = !isThai;
});