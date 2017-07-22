$(document).ready(function() {
  
  
// HOME BUTTON   
  
  $('#initials').mouseenter(function() {
    $('#initials').addClass('home');
  $('#initials').mouseleave(function() {
    $('#initials').removeClass('home');
    });
  });
  
  
  
// TN7 CREDITS 
  
$(document).ready(function() {
  if($(window).width() < 1000) {
      $('#credits1').hide();
      $('#credits2').show();
    } else {
      $('#credits1').show();
      $('#credits2').hide();
    }
}); 
                       
    $(window).resize(function() {
    if($(window).width() < 1000) {
      $('#credits1').hide();
      $('#credits2').show();
    } else {
      $('#credits1').show();
      $('#credits2').hide();
    }
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
  
  
  // Personal Brand
  
  $('#brand-thumb1').click(function() {
    $('.brand-hero').removeClass('brand-hero2 brand-hero3');
    $('.brand-hero').addClass('brand-hero1');
    $('#caption1').text('My brand imagery focuses on duotone style. I wanted to portray a bold, contemporary identity that reimagines familiar scenes and objects in a new light.');
  });
  
  $('#brand-thumb2').click(function() {
    $('.brand-hero').removeClass('brand-hero1 brand-hero3');
    $('.brand-hero').addClass('brand-hero2');
    $('#caption1').text('Your business card can help make a great first impression. To give clients a personal touch and some extra pop, I hand-painted the edges of my cards.');
  });
  
  $('#brand-thumb3').click(function() {
    $('.brand-hero').removeClass('brand-hero1 brand-hero2');
    $('.brand-hero').addClass('brand-hero3');
    $('#caption1').text('A style guideline will help your visual identity remain consistent and keep information accessible when creating new designs. Shown here is my logo, RGB color scheme, and a simple font guide, but much more can be defined in yours from brand voice to photography style.');
  });
  
  // Web
  
   $('#website-thumb1').click(function() {
    $('.website-hero').removeClass('website-hero2 website-hero3 website-hero4');
    $('.website-hero').addClass('website-hero1');
    $('#web-caption').text('My website is responsive - it was designed to adapt to multiple devices and screen sizes. Of course I\'ll make sure to do the same for yours, no need to ask.');
  });
  
  $('#website-thumb2').click(function() {
    $('.website-hero').removeClass('website-hero1 website-hero3 website-hero4');
    $('.website-hero').addClass('website-hero2');
    $('#web-caption').text('My website is responsive - it was designed to adapt to multiple devices and screen sizes. Of course I\'ll make sure to do the same for yours, no need to ask.');
  });
  
   $('#website-thumb3').click(function() {
    $('.website-hero').removeClass('website-hero1 website-hero2 website-hero4');
    $('.website-hero').addClass('website-hero3');
    $('#web-caption').text('My website is responsive - it was designed to adapt to multiple devices and screen sizes. Of course I\'ll make sure to do the same for yours, no need to ask.');
  });
  
  $('#website-thumb4').click(function() {
    $('.website-hero').removeClass('website-hero1 website-hero2 website-hero3');
    $('.website-hero').addClass('website-hero4');
    $('#web-caption').text('Wireframes will help organize your website\'s structure and layout while saving time in the long run. I\'ll provide you with these, as well as a more realistic mockup of your website early on so you know I\'m moving in the right direction.');
  });
  
 
  
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
    $('#yw-caption').text('The "Shop with Purpose" campaign ran in Fall 2016 to promote the benefits of supporting the variety of socially responsible brands carried at Yellow Wood. Examples shown are a quarter page newspaper layout and direct mail flyer.');
  });
  
  $('#yw-thumb-2').click(function() {
    $('.yw-hero').removeClass('yw-hero1 yw-hero3 yw-hero4');
    $('.yw-hero').addClass('yw-hero2');
    $('#yw-caption').text('The "Shop with Purpose" campaign ran in Fall 2016 to promote the benefits of supporting the variety of socially responsible brands carried at Yellow Wood. Examples shown are a quarter page newspaper layout and direct mail flyer.');
  });
  
  $('#yw-thumb-3').click(function() {
    $('.yw-hero').removeClass('yw-hero1 yw-hero2 yw-hero4');
    $('.yw-hero').addClass('yw-hero3');
    $('#yw-caption').text('Another newspaper ad from a campaign ran in Fall 2016 to promote Yellow Wood\'s variety of technical and everyday product.');
  });
  
  
  $('#yw-thumb-4').click(function() {
    $('.yw-hero').removeClass('yw-hero1 yw-hero2 yw-hero3');
    $('.yw-hero').addClass('yw-hero4');
    $('#yw-caption').text('This ad ran in June to show support for Pride Month and featured one of everyone\'s favorite products, the ENO hammock.');
  });
  
  // TN7
  
  $('#tn7-thumb-1').click(function() {
    $('.tn7-hero').removeClass('tn7-hero2 tn7-hero3 tn7-hero4 tn7-hero5');
    $('.tn7-hero').addClass('tn7-hero1');
    $('#tn7-caption').text('"Look Closer, Say Something" album cover art by Zachary Lewis.');
  });
                        
  $('#tn7-thumb-2').click(function() {
    $('.tn7-hero').removeClass('tn7-hero1 tn7-hero3 tn7-hero4 tn7-hero5');
    $('.tn7-hero').addClass('tn7-hero2');
    $('#tn7-caption').text('The final product - digipak design with liner notes. I was lucky to have Zachary\'s great artwork when designing the packaging layout.');
  });
                          
  $('#tn7-thumb-3').click(function() {
    $('.tn7-hero').removeClass('tn7-hero1 tn7-hero2 tn7-hero4 tn7-hero5');
    $('.tn7-hero').addClass('tn7-hero3');
    $('#tn7-caption').text('The final product - digipak design with liner notes. I was lucky to have Zachary\'s great artwork when designing the packaging layout.');
  });
                          
  $('#tn7-thumb-4').click(function() {
    $('.tn7-hero').removeClass('tn7-hero1 tn7-hero2 tn7-hero3 tn7-hero5');
    $('.tn7-hero').addClass('tn7-hero4');
    $('#tn7-caption').text('The final product - digipak design with liner notes. I was lucky to have Zachary\'s great artwork when designing the packaging layout.');
  });
  
  $('#tn7-thumb-5').click(function() {
    $('.tn7-hero').removeClass('tn7-hero1 tn7-hero2 tn7-hero3 tn7-hero4');
    $('.tn7-hero').addClass('tn7-hero5');
    $('#tn7-caption').text('The final product - digipak design with liner notes. I was lucky to have Zachary\'s great artwork when designing the packaging layout.');
  });
  
  
  // Process Description
  
  $('.step').mouseenter(function() {
    $(this).find('p').css('color', '#fffef9');
    $(this).mouseleave(function() {
      $(this).find('p').css('color', '#292e33');
    });
    });
  
  
  
  
});