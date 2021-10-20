let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > การรับเข้าศึกษา > ระดับปริญญาตรี";
    document.getElementById("admission-th").src="./img/banner/admission_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > ADMISSION > BACHELOR'S DEGREE";
    document.getElementById("admission-th").src="./img/banner/admission_en.jpg";
  }
  isThai = !isThai;
});