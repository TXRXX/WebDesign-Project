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
  
let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > เกี่ยวกับ > บุคลากร > คณาจารย์ประจำหลักสูตร GIS";
    document.querySelector(".text-personel").textContent = "คณาจารย์ประจำหลักสูตร GIS";
    document.getElementById("staffGIS-th").src="./img/banner/banner_GISstaff_th.jpeg";
} else {
    document.querySelector(".breadcrumb").textContent = "HOME > ABOUT > PERSONNEL > TEACHING STAFF IN GIS";
    document.querySelector(".text-personel").textContent = "TEACHING STAFF IN GIS";
    document.getElementById("staffGIS-th").src="./img/banner/banner_GISstaff_en.jpeg";
}
isThai = !isThai;
});