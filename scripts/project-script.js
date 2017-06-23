$(document).ready(function() {
  
  $('#initials').mouseenter(function() {
    $('#initials').addClass('home');
  $('#initials').mouseleave(function() {
    $('#initials').removeClass('home');
    });
  });
  
  
  
  $('.proj-parent').mouseenter(function() {
    $(this).find('.proj-button').addClass('proj-button2');
  $('.proj-parent').mouseleave(function() {
    $(this).find('.proj-button').removeClass('proj-button2');
  }); 
  });
  
  $('#contact-link').mouseenter(function() {
    var source = "images/email_icon.svg";
    $(this).find('.footer-icon').attr('src', source);
    $('#contact-link').mouseleave(function() {
      $(this).find('.footer-icon').attr('src', "images/email_icon_red.svg");
    });
  });
  
  // Photo Switch
  
  // Poster
  
  $('#j-poster-thumb').click(function() {
    $('.poster-hero').removeClass('poster-hero2 poster-hero3');
    $('.poster-hero').addClass('poster-hero1');
  });
  
   $('#m-poster-thumb').click(function() {
    $('.poster-hero').removeClass('poster-hero1 poster-hero3');
    $('.poster-hero').addClass('poster-hero2');
  });
  
   $('#f-poster-thumb').click(function() {
    $('.poster-hero').removeClass('poster-hero1 poster-hero2');
    $('.poster-hero').addClass('poster-hero3');
  });
  
  // Photo
  
  $('#j-photo-thumb').click(function() {
    $('.photo-hero').removeClass('photo-hero2 photo-hero3');
    $('.photo-hero').addClass('photo-hero1');
  });
  
  $('#m-photo-thumb').click(function() {
    $('.photo-hero').removeClass('photo-hero1 photo-hero3');
    $('.photo-hero').addClass('photo-hero2');
  });
  
   $('#f-photo-thumb').click(function() {
    $('.photo-hero').removeClass('photo-hero1 photo-hero2');
    $('.photo-hero').addClass('photo-hero3');
  });
  
  // Icon
  
  $('#j-icon-thumb').click(function() {
    $('.icon-hero').removeClass('icon-hero2 icon-hero3');
    $('.icon-hero').addClass('icon-hero1');
  });
  
 $('#m-icon-thumb').click(function() {
   $('.icon-hero').removeClass('icon-hero1 icon-hero3');
   $('.icon-hero').addClass('icon-hero2');
 });
  
 $('#f-icon-thumb').click(function() {
  $('.icon-hero').removeClass('icon-hero1 icon-hero2');
  $('.icon-hero').addClass('icon-hero3');
 });
  
  // YW
  
  $('#yw-thumb-1').click(function() {
    $('.yw-hero').removeClass('yw-hero2 yw-hero3 yw-hero4');
    $('.yw-hero').addClass('yw-hero1');
  });
  
  $('#yw-thumb-2').click(function() {
    $('.yw-hero').removeClass('yw-hero1 yw-hero3 yw-hero4');
    $('.yw-hero').addClass('yw-hero2');
  });
  
  $('#yw-thumb-3').click(function() {
    $('.yw-hero').removeClass('yw-hero1 yw-hero2 yw-hero4');
    $('.yw-hero').addClass('yw-hero3');
  });
  
  $('#yw-thumb-4').click(function() {
    $('.yw-hero').removeClass('yw-hero1 yw-hero2 yw-hero3');
    $('.yw-hero').addClass('yw-hero4');
  });
  
  // TN7
  
  $('#tn7-thumb-1').click(function() {
    $('.tn7-hero').removeClass('tn7-hero2 tn7-hero3 tn7-hero4 tn7-hero5');
    $('.tn7-hero').addClass('tn7-hero1');
  });
                        
  $('#tn7-thumb-2').click(function() {
    $('.tn7-hero').removeClass('tn7-hero1 tn7-hero3 tn7-hero4 tn7-hero5');
    $('.tn7-hero').addClass('tn7-hero2');
  });
                          
  $('#tn7-thumb-3').click(function() {
    $('.tn7-hero').removeClass('tn7-hero1 tn7-hero2 tn7-hero4 tn7-hero5');
    $('.tn7-hero').addClass('tn7-hero3');
  });
                          
  $('#tn7-thumb-4').click(function() {
    $('.tn7-hero').removeClass('tn7-hero1 tn7-hero2 tn7-hero3 tn7-hero5');
    $('.tn7-hero').addClass('tn7-hero4');
  });
  
  $('#tn7-thumb-5').click(function() {
    $('.tn7-hero').removeClass('tn7-hero1 tn7-hero2 tn7-hero3 tn7-hero4');
    $('.tn7-hero').addClass('tn7-hero5');
  });
  
  
  
  
  
  
  
  
  
  
});