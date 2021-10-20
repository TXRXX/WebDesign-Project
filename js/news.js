let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > ข่าวประชาสัมพันธ์";
    document.querySelector(".text-news").textContent = "ข่าวประชาสัมพันธ์";
    document.getElementById("news-th").src="./img/banner/news_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > NEWS";
    document.querySelector(".text-news").textContent = "NEWS";
    document.getElementById("news-th").src="./img/banner/news_en.jpg";
  }
  isThai = !isThai;
});