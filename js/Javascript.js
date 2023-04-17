var openM = false;
document.getElementById("meny").addEventListener("click", function () {openMeny();});
function openMeny() {
  if (!openM) openM = true;
  else {
    document.getElementById("ul").style.display = "none";
    document.getElementById("meny").style.height = "auto";
    document.getElementById("meny").dataset.status = "false";
    openM = false;
    return;}
  document.getElementById("ul").style.display = "flex";
  document.getElementById("meny").style.height = "10rem";
  document.getElementById("meny").dataset.status = "true";}
document.getElementById("sec2send").addEventListener("click", function (){
  document.getElementById("sd1").scrollIntoView({
    behavior: "smooth"});})
document.getElementById("sec3send").addEventListener("click", function (){
  document.getElementById("tomsd2").scrollIntoView({
    behavior: "smooth"});})
document.getElementById("sec4send").addEventListener("click", function (){
  document.getElementById("tomsd3").scrollIntoView({
    behavior: "smooth"
  });

})

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
