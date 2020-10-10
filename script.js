$(function() {


  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $('#topButton').css('display', 'flex').fadeIn();
    } else {
      $('#topButton').fadeOut();
    }
  });

  $('a').click(function(e) {
    if (this.hash !== '') {
      e.preventDefault();

      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });


});
