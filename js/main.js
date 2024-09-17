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
// SCROLL ANIMATION
window.addEventListener("scroll", function () {
  var anime = document.querySelectorAll(".animeX");

  for (var s = 0; s < anime.length; s++) {
    var windowheight = window.innerHeight;
    var animetop = anime[s].getBoundingClientRect().top;
    var animepoint = 150;

    if (animetop < windowheight - animepoint) {
      anime[s].classList.add("active");
    } else {
      anime[s].classList.remove("active");
    }
  }
});
