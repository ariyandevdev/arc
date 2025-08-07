// document.addEventListener("DOMContentLoaded", function () {
//   const toggleBtn = document.getElementById("menu-toggle");
//   const navMenu = document.querySelector(".main-nav");

//   toggleBtn.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//   });
// });
// document.addEventListener("click", function (e) {
//   const navMenu = document.querySelector(".main-nav");
//   const toggleBtn = document.getElementById("menu-toggle");

//   if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
//     navMenu.classList.remove("active");
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const navMenu = document.querySelector(".main-nav");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

  // بستن با کلیک بیرون
  document.addEventListener("click", function (e) {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });
});
