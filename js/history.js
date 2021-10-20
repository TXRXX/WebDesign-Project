let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector("#history-text").textContent = "ประวัติความเป็นมา";
    document.getElementById("history-th").src="./img/banner/history_th.jpg";
  } else {
    document.querySelector("#history-text").textContent = "History";
    document.getElementById("history-th").src="./img/banner/history_en.jpg";
  }
  isThai = !isThai;
});