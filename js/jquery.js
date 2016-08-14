////////////////// Nav menu  //////////////////
// $(function() {
//     var pull        = $('#pull');
//         menu        = $('nav ul');
//         menuHeight  = menu.height();
//         var $hamburger = $(".hamburger");
 
//     $(pull).on('click', function(e) {
//         e.preventDefault();
//         menu.slideToggle();
//     });

//       $hamburger.on("click", function(e) {
//     $hamburger.toggleClass("is-active");
//     // Do something else, like open/close menu
//  });
// });

// $(window).resize(function(){
//     var w = $(window).width();
//     if(w > 320 && menu.is(':hidden')) {
//         menu.removeAttr('style');
//     }
// });

////////////////// Back to top button  //////////////////
var amountScrolled = 300;

$(document).ready(function(){

    //fade in back to top button
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    //scroll animation back to top
    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});


////////////////// Nav Menu  //////////////////
function openNav(){
  document.getElementById("nav").style.height= "100%";
}

function closeNav(){
  document.getElementById("nav").style.height = "0%";
}