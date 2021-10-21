let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > การศึกษา > ทุนการศึกษา > ระดับปริญญาเอก";
    document.getElementById("p3scholarship-th").src="./img/banner/p3scholarship_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > EDUCATION > SCHOLARSHIP > DOCTOR'S DEGREE";
    document.getElementById("p3scholarship-th").src="./img/banner/p3scholarship_en.jpg";
  }
  isThai = !isThai;
});