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

  
// Mobile Height Resize on Scroll Fix
  
  if (width <=599 && width < height) {
    var viewportHeight = $('.page').innerHeight();
    $('.page').css({ height: viewportHeight });
}

  
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
        var heightRatio = (height / newHeight)* 100;
        var navHeight = (4 * (heightRatio/100));
        $('.page').css('height', heightRatio + "vh");
        $('nav ul li a').css('height', navHeight + "vh");
        $('nav ul li a').css('line-height', navHeight + "vh");
        $('html, body').animate({
          scrollTop: $("#my_form").offset().top
        });
      }
      if ((height / newHeight) === 1) {
        $('.page').css('height', '100vh');
        $('nav ul li a').css('height', '4vh');
        $('nav ul li a').css('line-height', '4vh');
      }
    });
  }
  
  
  
});









