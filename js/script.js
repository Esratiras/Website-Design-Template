$(document).ready(function(){
    $("a").on('click', function(event) {  //for all links
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".backtotop").fadeIn();
        }
         
        else{
            $(".backtotop").fadeOut();
        }
    });
    $(".backtotop").click(function(){
        $("html,body").animate({scrollTop:0},700);
        return false; 
    });
});





