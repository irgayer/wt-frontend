function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

jQuery(document).ready(function() {
    var btn = $('.button');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 300) {
         btn.addClass('show');
       } else {
         btn.removeClass('show');
       }
     });
     btn.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, '300');
    });
});

$("#author-pic").mouseover(function(){
  $(this).attr("src", "images/author-pic-2.jpg")
});

$("#author-pic").mouseout(function(){
  $(this).attr("src", "images/author-img-2.webp")
});

