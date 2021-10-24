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
      document.querySelector(".breadcrumb").textContent = "หน้าหลัก > เกี่ยวกับ > บุคลากร > คณาจารย์ประจำหลักสูตร IT";
      document.querySelector(".text-personel").textContent = "คณาจารย์ประจำหลักสูตร IT";
      document.getElementById("staffIT-th").src="./img/banner/banner_ITstaff_th.jpg";
    } else {
      document.querySelector(".breadcrumb").textContent = "HOME > ABOUT > PERSONNEL > TEACHING STAFF IN IT";
      document.querySelector(".text-personel").textContent = "TEACHING STAFF IN IT";
      document.getElementById("staffIT-th").src="./img/banner/banner_ITstaff_en.jpg";
    }
    isThai = !isThai;
  });