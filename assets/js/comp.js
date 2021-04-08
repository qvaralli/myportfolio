// Download this photo on Unsplash
// https://unsplash.com/@traf

// Buy this preset:
// https://tr.af/presets

$(function(){
    $('.before-wrapper').on("mousemove", function (e) {
      var offsets = $(this).offset();
      var fullWidth = $(this).width();
      var mouseX = e.pageX - offsets.left;
      if (mouseX < 0) { mouseX = 0; }
      else if (mouseX > fullWidth) { mouseX = fullWidth }
      $(this).parent().find('.comparison-slider').css({ left: mouseX, transition: 'none' });
      $(this).find('.after-wrapper').css({ transform: 'translateX(' + (mouseX) + 'px)', transition: 'none' });
      $(this).find('.after').css({ transform: 'translateX(' + (-1 * mouseX) + 'px)', transition: 'none' });
    });
    $('.section-wrapper').on("mouseleave", function () {
      $(this).parent().find('.comparison-slider').css({
        left: '50%', transition: 'all .3s'
      });
      $(this).find('.after-wrapper').css({
        transform: 'translateX(50%)', transition: 'all .3s'
      });
      $(this).find('.after').css({
        transform: 'translateX(-50%)', transition: 'all .3s'
      });
    });
  });