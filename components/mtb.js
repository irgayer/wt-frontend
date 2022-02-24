jQuery(document).ready(function() {

  // <<--Scroll-button-->>
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


     $('.zoomm').ezPlus({
        scrollZoom: true,
        zoomType: 'inner',
        cursor: 'crosshair'
    });
    
  
  // <<--PopUp-button-->>
    $('a.modal-btn').click(function(e){
        e.preventDefault();
        var Pops = $(this).attr("href");
        $(Pops).addClass('show');
    
        $(Pops + ' .popup_close').click(function(){
            $(Pops).removeClass('show');
        });
        $(Pops + ' .popup_overlay').click(function(){
            $(Pops).removeClass('show');
        });
    });
    
    var block = document.querySelector('.modal-btn');

      block.addEventListener('mouseenter', function () {
          block.classList.add('meme');
        });
        block.addEventListener('mouseleave', function () {
            block.classList.remove('meme');
        });


  // <<--Date-counter-->>

var countDownDate = new Date("March 8, 2022 00:00:00").getTime();  // Set the date we're counting down to

// Update the count down every 1 second
    var x = setInterval(function() {


      var now = new Date().getTime();  // Get today's date and time


      var distance = countDownDate - now;  // Find the distance between now and the count down date

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

// <<--BgSound-->>
      var audio = document.getElementById("bgsound");
  function control(){
      document.addEventListener('keydown', function(e){
          if(e.keyCode == 39 || e.keyCode == 37){
              !audio.paused && audio.pause();
              audio.currentTime +=  e.which == 39 ? 10 : -10;
          }
      }, false);
      document.addEventListener('keyup', function(e){
        if((e.keyCode== 39 || e.keyCode == 37) && audio.paused){
            audio.play();
        }
    }, false);


      document.addEventListener('keydown', function(e){
        if((e.keyCode== 77) && !audio.paused){
            audio.pause();
        }
    }, false);
    document.addEventListener('keydown', function(e){
      if((e.keyCode== 65) && audio.paused){
          audio.play();
      }
  }, false);


  }
  audio.addEventListener("loadedmetadata", control, false);

  });
