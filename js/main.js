let menuBtn = document.querySelector("#menu");
let sitenav = document.querySelector(".sitenav");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("bx-x");
  sitenav.classList.toggle("active");
};
// LOADER
function closepreloader() {
  document.getElementById("loader").style.display = "none";
}
window.addEventListener("load", function () {
  setTimeout(closepreloader, 1000);
});
