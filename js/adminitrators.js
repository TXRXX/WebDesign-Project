// START GRADIENT EFFECT
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.rowGra');
  
      if (entry.isIntersecting) {
        square.classList.add('animation-rowGra');
        return;
      }
      square.classList.remove('animation-rowGra');
    });
  });
  
  observer.observe(document.querySelector('.main-admin'));
// END GRADIENT EFFECT


let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".text-adminitrators").textContent = "คณะผู้บริหาร";
    document.getElementById("admins-th").src="./img/banner/banner_admin_th.jpg";

  } else {
    document.querySelector(".text-adminitrators").textContent = "Administrative Board";
    document.getElementById("admins-th").src="./img/banner/banner_admin_en.jpg";

  }
  isThai = !isThai;
});