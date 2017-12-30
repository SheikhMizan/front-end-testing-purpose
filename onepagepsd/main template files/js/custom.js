jQuery(document).ready(function(){

    // navbar white background
    jQuery(window).scroll(function (){
      var wind = jQuery(window).scrollTop();
      if(jQuery(window).scrollTop() > 100){
        jQuery('.navbar').css('background','#fff');
      }
      else if (jQuery(window).scrollTop()> -100) {
          jQuery('.navbar').css('background','transparent');
      }
    });

    // Registration form
    jQuery('.navbar-toggler-icon').click(function(){
      jQuery('.users').show();
    });
    jQuery('.panel-title').click(function(){
      console.log('he');
    });
    jQuery(window).resize(function(){
      var screenSize = jQuery(window).width();
      if (screenSize < 1335){
          jQuery('.users').show();
          jQuery('.formreg').hide();
      }
    });
    console.log('You imagine, I make it online!- SM'); /*Nothing, just a slogan*/
});
