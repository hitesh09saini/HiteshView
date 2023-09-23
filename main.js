const menuContainer = document.querySelector(".menu-container");
const menuIcon = document.querySelector("nav .menu-icon");
const closeIcon = document.querySelector(".menu-container .close-icon");

menuIcon.addEventListener("click", () => {
  menuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  menuContainer.classList.remove("active");
});
