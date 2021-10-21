// START EFFECT
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animation-slide');
    }
  });
});

observer.observe(document.querySelector('.text-personel'));
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