let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > การศึกษา > หลักสูตร > ระดับปริญญาโท";
    document.querySelector(".ba-text").textContent = "หลักสูตรการศึกษาระดับปริญญาโท";
    document.querySelector(".cs").textContent = "สาขาวิชาวิทยาการคอมพิวเตอร์";
    document.querySelector(".csit").textContent = "สาขาวิชาวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ";
    document.querySelector(".ai").textContent = "สาขาวิชาวิทยาการข้อมูลและปัญญาประดิษฐ์";
    document.querySelector(".it").textContent = "สาขาวิชาเทคโนโลยีสารสนเทศ";
    document.querySelector(".gis").textContent = "สาขาวิชาภูมิสารสนเทศศาสตร์";
    document.getElementById("p2scholarship-th").src="./img/banner/masterprogram_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > EDUCATION > SYLLABUS > MASTER'S DEGREE";
    document.querySelector(".ba-text").textContent = "MASTER'S DEGREE SYLLABUS";
    document.querySelector(".cs").textContent = "PROGRAM IN COMPUTER SCINCE";
    document.querySelector(".csit").textContent = "PROGRAM IN COMPUTER SCINCE AND INFORMATION TECHNOLOGY";
    document.querySelector(".ai").textContent = "PROGRAM IN DATA SCIENCE AND ARTIFICIAL INTELLIGENCE";
    document.querySelector(".it").textContent = "PROGRAM IN INFORMATION TECHNOLOGY";
    document.querySelector(".gis").textContent = "PROGRAM IN GEO-INFORMATICS";
    document.getElementById("p2scholarship-th").src="./img/banner/masterprogram_en.jpg";
  }
  isThai = !isThai;
});