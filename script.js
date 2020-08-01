var formPage = document.querySelector(".info-wrapper");
var formPage1 = document.querySelector(".button.full");
var showForm = document.querySelector("#quote-wrapper");
var quoteOverlay = document.getElementById("quote-overlay");
var crossExit = document.querySelector(".cross-icon-wrapper");

formPage.onclick= function(){
  showForm.style.display = "block";
}
formPage1.onclick= function(){
  showForm.style.display = "block";
}

quoteOverlay.onclick = function(){
  showForm.style.display = "none";
}
crossExit.onclick = function(){
  showForm.style.display = "none";
}


var navBtn = document.getElementsByClassName('w-nav-button')[0];

navBtn.addEventListener('click', function() {
    this.classList.toggle('w--open');
    document.getElementsByClassName('w-nav-menu')[0].classList.toggle('m--open')
})