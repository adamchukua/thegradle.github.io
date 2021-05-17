// Button to top

var $page = $('html, body');

$('a[href*="#"]').click(function() {
  $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
  return false;
});

$(window).scroll(function() {
 if($(this).scrollTop() != 0) {
  $('#toTop').fadeIn();
 } else {
  $('#toTop').fadeOut();
 }
});

$('#toTop').click(function() {
  $('body, html').animate({scrollTop:0}, 800);
});

// More photos via button "More photos"

$('#nextContents').click(function(){
  $('.block-photos-item').fadeIn();
  $('#nextContents').hide();
});

// Popup-preview for photos

$('.block-photos-item-review__img').click(function(e) {
  $('.block-preview-photo__img').attr("src", ""); // clean src img

  var src = e.target.src + "-full.webp"; // put in src full version image
  
  $('.block-preview-photo__img').attr("src", src);
  
  $('#toTop').fadeOut(); // hide btn "toTop"
  $('.block-preview').fadeIn(); // Show preview
});

$('.block-preview-photo').click(function(e) { // Close preview if user is not click on image 
  if(this === e.target) {
    $('.block-preview').fadeOut();
    $('#toTop').fadeIn();
  }
});

$(document).keyup(function(e) { // Close preview if user is click on Escape
  if (e.key === "Escape") {
    $('.block-preview').fadeOut();
  }
});