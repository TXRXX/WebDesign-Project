let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > การศึกษา > ทุนการศึกษา > ระดับปริญญาโท";
    document.getElementById("p2scholarship-th").src="./img/banner/p2scholarship_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > EDUCATION > SCHOLARSHIP > MASTER'S DEGREE";
    document.getElementById("p2scholarship-th").src="./img/banner/p2scholarship_en.jpg";
  }
  isThai = !isThai;
});