let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").innerHTML = "หน้าหลัก > การศึกษา > หลักสูตร > <a href='./syllabus-bachelor.html'>ระดับปริญญาตรี</a> > ภูมิสารสนเทศศาสตร์";
    document.getElementById("gis-banner").src="./img/banner/gis_th.jpg";
  } else {
    document.querySelector(".breadcrumb").innerHTML = "HOME > EDUCATION > SYLLABUS > <a href='./syllabus-bachelor.html'>BACHELOR'S DEGREE</a> > GEO-INFORMATICS";
    document.getElementById("gis-banner").src="./img/banner/gis_en.jpg";
  }
  isThai = !isThai;
});