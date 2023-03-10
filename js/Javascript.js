var openM = false;
document.getElementById("meny").addEventListener("click", function () {
  openMeny();
});
function openMeny() {
  if (!openM) openM = true;
  else {
    document.getElementById("ul").style.display = "none";
    document.getElementById("meny").style.height = "auto";
    openM = false;
    return;
  }
  document.getElementById("ul").style.display = "flex";
  document.getElementById("meny").style.height = "10rem";
}
