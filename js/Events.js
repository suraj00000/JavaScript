document.getElementById("heading").addEventListener("click", function (e) {
  console.log("You have clicked on heading");
  let vari = e.target;
  vari = e.target.className;
  vari = Array.from(e.target.classList); // for converting it into array *name of class*
  // vari = e.target.id;
  vari = e.offsetX;
  vari = e.offsetY;
  console.log(vari);
  // location.href = "//google.com";
});
