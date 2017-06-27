$(document).ready(function() {

  
  window.onresize = function(){ location.reload(); }
  
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
  
  
// Tattoo Parallax  
  /*
  window.onscroll = function() {
	if (window.pageYOffset > 0) {
		document.getElementById("tattoo").style.top = (34 +(window.pageYOffset)*.035)+"em";
		}
	};
  */

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


  
  
  
  
  
});