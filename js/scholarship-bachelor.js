let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > การศึกษา > ทุนการศึกษา > ระดับปริญญาตรี";
    document.getElementById("p1scholarship-th").src="./img/banner/p1scholarship_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > EDUCATION > SCHOLARSHIP > BACHELOR'S DEGREE";
    document.getElementById("p1scholarship-th").src="./img/banner/p1scholarship_en.jpg";
  }
  isThai = !isThai;
});