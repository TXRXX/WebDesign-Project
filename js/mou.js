let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > งานวิจัย > MOU";
    document.getElementById("mou-th").src="./img/banner/mou_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > RESEARCH > MOU";
    document.getElementById("mou-th").src="./img/banner/mou_en.jpg";
  }
  isThai = !isThai;
});