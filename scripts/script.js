$(document).ready(function() {
  

  
    
// Text rotator

  $('#attributes').textition({
    autoplay: true,
    animation: 'ease-in-out',
    interval: 2.5,
    speed: 1.5,
    map: {
    x: 30,
    y: 50,
    } 
  }); 

  
  
// Detect Touch
  
  
window.addEventListener('touchstart', function onFirstTouch() {
  
  if (width > 600) {
    $('nav li a').css({'color': '#fff32c', 'width': '8vw'});
  }
  
  
  
  // we could use a class
  //document.body.classList.add('user-is-touching');
  
  // or set some global variable
  //window.USER_IS_TOUCHING = true;

  // or set your app's state however you normally would
  //myFrameworkOfChoice.dispatchEvent('USER_IS_TOUCHING', true);

  // we only need to know once that a human touched the screen, so we can stop listening now
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);
  
  
  
  
// On / Off Switch  
  
var cine = document.getElementById('cine-video');  
  
  $('#myonoffswitch').change(function() {
    if (cine.paused === false) {
      cine.pause();
    } else {
      cine.play();
    }
});
    
  
// Project Button Hover

$('.parent').mouseenter(function() {
  $(this).find('.project-button').addClass('project-button2');
$('.parent').mouseleave(function() {
  $(this).find('.project-button').removeClass('project-button2');
}); 
});
  
  
 // Rearrange Home Page Elements 

  var width = $(window).width();
  var height = $(window).height();
  if (width >= 600 && width <=1024 && width > height) {
    $('#w-skills-container').appendTo('#w-proj-box');
    $('#g-skills-container').appendTo('#g-proj-box');
    $('#s-skills-container').appendTo('#s-proj-box');
  } 

  
  // Remove Video on Mobile
  
  if (width <= 599 || height <=599) {
    $('#cine-video').remove();  
    $('#video-switch').remove();
    
    
  }
  

  // Form Recenter
  
  if (width <= 599) {
    $(window).resize(function() {
      var newHeight = $(window).height();
      if ((height / newHeight) > 1.3) {
        $('link[href="styles/main-phone-l.css"]').prop('disabled', true);
        $('link[href="styles/main-phone-p.css"]').prop('disabled', true);
        $('link[href="styles/main-tab-l.css"]').prop('disabled', true);
        $('link[href="styles/main-tab-p.css"]').prop('disabled', true);
        $('nav').css('visibility', 'hidden');
        $('.page').css('height', 'calc(100vw*(16/9))');
        $('html, body').animate({
          scrollTop: $("#my_form").offset().top
        });
      }
      if ((height / newHeight) === 1) {
        $('link[href="styles/main-phone-l.css"]').prop('disabled', false);
        $('link[href="styles/main-phone-p.css"]').prop('disabled', false);
        $('link[href="styles/main-tab-l.css"]').prop('disabled', false);
        $('link[href="styles/main-tab-p.css"]').prop('disabled', false);
        $('nav').css('visibility', 'visible');
        $('.page').css('height', 'calc(100vw*(16/9))');
        $('nav ul li a').css('height', '4vh');
        $('nav ul li a').css('line-height', '4vh');
      }
    });
  }
  
  
  
});









