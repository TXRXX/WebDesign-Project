let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > การศึกษา > หลักสูตร > ระดับปริญญาเอก";
    document.querySelector(".ba-text").textContent = "หลักสูตรการศึกษาระดับปริญญาเอก";
    document.querySelector(".cs").textContent = "สาขาวิชาวิทยาการคอมพิวเตอร์ หลักสูตรนานาชาติ";
    document.querySelector(".it").textContent = "สาขาวิชาเทคโนโลยีสารสนเทศ หลักสูตรนานาชาติ";
    document.querySelector(".gis").textContent = "สาขาวิชาภูมิสารสนเทศศาสตร์";
    document.querySelector(".csit").textContent = "สาขาวิชาวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ หลักสูตรนานาชาติ";
    document.getElementById("p2scholarship-th").src="./img/banner/doctorprogram_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > EDUCATION > SYLLABUS > DOCTOR'S DEGREE";
    document.querySelector(".ba-text").textContent = "DOCTOR'S DEGREE SYLLABUS";
    document.querySelector(".csit").textContent = "PROGRAM IN COMPUTER SCINCE INTERNATIONAL";
    document.querySelector(".cs").textContent = "PROGRAM IN COMPUTER SCINCE AND INFORMATION TECHNOLOGY INTERNATIONAL";
    document.querySelector(".it").textContent = "PROGRAM IN INFORMATION TECHNOLOGY INTERNATIONAL";
    document.querySelector(".gis").textContent = "PROGRAM IN GEO-INFORMATICS";
    document.getElementById("p2scholarship-th").src="./img/banner/doctorprogram_en.jpg";
  }
  isThai = !isThai;
});