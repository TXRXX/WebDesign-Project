let isThai = false;
const langSwitch = document.querySelector(".slide");
langSwitch.addEventListener("click", () => {
  if (isThai) {
    document.querySelector(".breadcrumb").textContent = "หน้าหลัก > ติดต่อ";
    document.querySelector("#pos-text").textContent = "วิทยาลัยการคอมพิวเตอร์ อาคาร SC.06 มหาวิทยาลัยขอนแก่น";
    document.querySelector("#content-contact").innerHTML = "<p><br>123 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40002<br>โทรศัพท์ 043-009700 ต่อ 44456, 44459, 44457<br>สายด่วน. 089-7102651, 089-7102645<br>Department of Computer Science, Faculty of Science, Khon Kaen University.<br></p>";
    document.getElementById("contact-th").src="./img/banner/contact_th.jpg";
  } else {
    document.querySelector(".breadcrumb").textContent = "HOME > CONTACT";
    document.querySelector("#pos-text").textContent = "COLLEGE OF COMPUTING Building SC.06 KhonKaen University";
    document.querySelector("#content-contact").innerHTML = "<p><br>123 Mitraparp St. NaiMueng Mueng KhonKaen Province 40002<br>Telephone 043-009700 connect to 44456, 44459, 44457<br>Hot Line. 089-7102651, 089-7102645<br>Department of Computer Science, Faculty of Science, Khon Kaen University.<br></p>";
    document.getElementById("contact-th").src="./img/banner/contact_en.jpg";
  }
  isThai = !isThai;
});