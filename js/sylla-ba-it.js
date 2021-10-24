let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").innerHTML = "หน้าหลัก > การศึกษา > หลักสูตร > <a href='./syllabus-bachelor.html'>ระดับปริญญาตรี</a> > เทคโนโลยีสารสนเทศ";
    document.getElementById("it-banner").src="./img/banner/it_th.jpg";
  } else {
    document.querySelector(".breadcrumb").innerHTML = "HOME > EDUCATION > SYLLABUS > <a href='./syllabus-bachelor.html'>BACHELOR'S DEGREE</a> > INFORMATION TECHNOLOGY";
    document.getElementById("it-banner").src="./img/banner/it_en.jpg";
  }
  isThai = !isThai;
});