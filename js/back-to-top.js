//Get the button
let btnTop = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 3000 ||
    document.documentElement.scrollTop > 3000
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
btnTop.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
