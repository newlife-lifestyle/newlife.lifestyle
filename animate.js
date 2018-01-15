$(document).ready(function(){
    $('.menu-bar-mobile').click(function(){
        $('.mobile-menu > nav').show();
    });
    $('.closebtn').click(function(){
      $('.mobile-menu > nav').hide();
    })
});

var slideIndex = 1;
    showImage(slideIndex);

    function plusDivs(n){
        showImage (slideIndex += n);
    }
    function showImage(n) {
        var i;
        var x = document.getElementsByClassName("comments");
        if (n >x.length) {slideIndex=1}
        if (n <1) {slideIndex = x.length};
        for (i=0; i < x.length; i++) {
            x[i].style.display="none";
        }
        x[slideIndex-1].style.display="block"
    }
