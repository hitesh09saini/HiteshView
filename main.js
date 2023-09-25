const menuContainer = document.querySelector(".menu-container");
const menuIcon = document.querySelector("nav .menu-icon");
const closeIcon = document.querySelector(".menu-container .close-icon");

menuIcon.addEventListener("click", () => {
  menuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  menuContainer.classList.remove("active");
});

const home = document.getElementById('home');

document.getElementById('about').addEventListener('click',()=>{
  home.style.display = "none";
  
});

document.getElementById('about').addEventListener('click',()=>{

});

document.getElementById('about').addEventListener('click',()=>{

});
document.getElementById('about').addEventListener('click',()=>{

});


// document.querySelectorAll(".btn").forEach((btn) => {
//   btn.addEventListener("mousemove", (e) => {
//       let x = e.offsetX;
//       let y = e.offsetY;
//       let btnWidth = btn.clientWidth;
//       let btnHeight = btn.clientHeight;
//       let transX = x - btnWidth / 2;
//       let transY = y - btnHeight / 2;
//       btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

//       let mx = e.pageX - btn.offsetLeft;
//       let my = e.pageY - btn.offsetTop;
//       btn.style.setProperty("--x", mx + "px");
//       btn.style.setProperty("--y", my + "px");
//   });
//   btn.addEventListener("mouseout", (e) => {
//       btn.style.transform = "";
//   });
// });
