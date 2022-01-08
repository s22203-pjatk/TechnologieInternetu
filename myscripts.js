$(document).ready(function() {
    var NavY = $('#sticky_nav').offset().top;
    $("#side_logo").hide();
    
    var stickyNav = function(){
    var ScrollY = $(window).scrollTop();
    var logo = $('#side_logo');
        
    if (ScrollY > NavY) { 
        $('#sticky_nav').addClass('sticky');
        logo.fadeIn();
    } else {
        $('#sticky_nav').removeClass('sticky'); 
        logo.fadeOut();
    }
    };
    
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
    });

jQuery(function($)
{
    $.scrollTo(0);
    $('#side_logo').click(function(){$.scrollTo($('#main_logo'),700)});
}
);

