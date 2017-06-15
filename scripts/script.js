$(document).ready(function() {

  
  window.onresize = function(){ location.reload(); }
  
// Text rotator

  $('#attributes').textition({
    autoplay: false,
    animation: 'ease-in-out',
    interval: 3,
    speed: 1.5,
    map: {
    x: 70,
    y: 50,
    } 
  }); 
  
  
// Tattoo Parallax  
  
  window.onscroll = function() {
	if (window.pageYOffset > 0) {
		document.getElementById("tattoo").style.top = (34 +(window.pageYOffset)*.035)+"em";
		}
	};
  
  
$('#myonoffswitch').change(function() {
  $('#p-one-link').toggleClass('p-one pause');
});
  
  

$('.parent').mouseenter(function() {
  $(this).find('.project-button').addClass('project-button2');
$('.parent').mouseleave(function() {
  $(this).find('.project-button').removeClass('project-button2');
}); 
});
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
});