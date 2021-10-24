let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > การศึกษา > ปฏิทินการศึกษา > ระดับปริญญาตรี";
    document.querySelector(".calendar-text").textContent = "ปฏิทินการศึกษา";
    document.getElementById("calendar-th").src="./img/banner/undergraduatecalendar_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > EDUCATION > CALENDAR > BACHELOR'S DEGREE";
    document.querySelector(".calendar-text").textContent = "CALENDAR";
    document.getElementById("calendar-th").src="./img/banner/undergraduatecalendar_en.jpg";
  }
  isThai = !isThai;
});