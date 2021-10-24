let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").innerHTML = "หน้าหลัก > การศึกษา > หลักสูตร > <a href='./syllabus-bachelor.html'>ระดับปริญญาตรี</a> > วิทยาการคอมพิวเตอร์";
    document.getElementById("cs-banner").src="./img/banner/cs_th.jpg";
  } else {
    document.querySelector(".breadcrumb").innerHTML = "HOME > EDUCATION > SYLLABUS > <a href='./syllabus-bachelor.html'>BACHELOR'S DEGREE</a> > COMPUTER SCIENCE";
    document.getElementById("cs-banner").src="./img/banner/cs_en.jpg";
  }
  isThai = !isThai;
});