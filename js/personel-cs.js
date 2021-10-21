// START EFFECT
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.text-personel');
  
      if (entry.isIntersecting) {
        square.classList.add('animation-slide');
        return;
      }
      square.classList.remove('animation-slide');
    });
  });
  
  observer.observe(document.querySelector('.header-text'));
// END EFFECT








let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > เกี่ยวกับ > บุคลากร > คณาจารย์ประจำหลักสูตร CS";
    document.querySelector(".text-personel").textContent = "คณาจารย์ประจำหลักสูตร CS";
    document.getElementById("staffCS-th").src="./img/banner/banner_CSstaff_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > ABOUT > PERSONEL > TEACHING STAFF IN CS";
    document.querySelector(".text-personel").textContent = "TEACHING STAFF IN CS";
    document.getElementById("staffCS-th").src="./img/banner/banner_CSstaff_en.jpg";
  }
  isThai = !isThai;
});