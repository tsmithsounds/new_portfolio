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
  
  
  
  
});