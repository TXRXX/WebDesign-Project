let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > การศึกษา > หลักสูตร > ระดับปริญญาตรี";
    document.querySelector(".ba-text").textContent = "หลักสูตรการศึกษาระดับปริญญาตรี";
    document.querySelector(".cs").textContent = "สาขาวิชาวิทยาการคอมพิวเตอร์";
    document.querySelector(".it").textContent = "สาขาวิชาเทคโนโลยีสารสนเทศ";
    document.querySelector(".gis").textContent = "สาขาวิชาภูมิสารสนเทศศาสตร์";
    document.getElementById("p2scholarship-th").src="./img/banner/banner_p1program_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > EDUCATION > SYLLABUS > BACHELOR'S DEGREE";
    document.querySelector(".ba-text").textContent = "BACHELOR'S DEGREE SYLLABUS";
    document.querySelector(".cs").textContent = "PROGRAM IN COMPUTER SCINCE";
    document.querySelector(".it").textContent = "PROGRAM IN INFORMATION TECHNOLOGY";
    document.querySelector(".gis").textContent = "PROGRAM IN GEO-INFORMATICS";
    document.getElementById("p2scholarship-th").src="./img/banner/banner_p1program_en.jpg";
  }
  isThai = !isThai;
});