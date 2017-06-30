$(document).ready(function() {
  
    
// Text rotator

  $('#attributes').textition({
    autoplay: true,
    animation: 'ease-in-out',
    interval: 2.5,
    speed: 1.5,
    map: {
    x: 70,
    y: 50,
    } 
  }); 


$('#myonoffswitch').change(function() {
  $('#p1-link').toggleClass('p-one pause');
  
});
  


$('.parent').mouseenter(function() {
  $(this).find('.project-button').addClass('project-button2');
$('.parent').mouseleave(function() {
  $(this).find('.project-button').removeClass('project-button2');
}); 
});
  
  
  

  var width = $(window).width();
  var height = $(window).height();
  if (width >= 600 && width <=1024 && width > height) {
    $('#w-skills-container').appendTo('#w-proj-box');
    $('#g-skills-container').appendTo('#g-proj-box');
    $('#s-skills-container').appendTo('#s-proj-box');
  } 

  
  if (width <= 599 || height <=599) {
    $('#cine-video').remove();  
    $('#video-switch').remove();
  }
  
  /*
  
  var modal = document.getElementById('form-messages');
  var btn = document.getElementById('send');
  var span = document.getElementById('close') [0];
  btn.onclick = function () {
    alert('send');
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  */
  
});









