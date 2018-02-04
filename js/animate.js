$(document).ready(function(){
    $('.menu-bar-mobile').click(function(){
        $('.mobile-menu > nav').show();
    });
    $('.closebtn').click(function(){
      $('.mobile-menu > nav').hide();
    })
});

$(document).ready(function() {
   $("a.active").click(function() {
       $(this).addclass("link")
   });
});

var slideShow = 1;
showSlides(slideShow=1);

function minusSlides(n) {
  showSlides(slideShow += n);
}

function currentSlide(n) {
  showSlides(slideShow = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("customer-review");
  if (n > slides.length) {slideShow = 1}
  if (n < 1) {slideShow = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  };
  slides[slideShow-1].style.display = "block";
};
