let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > งานวิจัย > ศูนย์วิจัยและกลุ่มวิจัย";
    document.getElementById("mou-th").src="./img/banner/research_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > RESEARCH > RESEARCH GROUP";
    document.getElementById("mou-th").src="./img/banner/research_en.jpg";x
  }
  isThai = !isThai;
});