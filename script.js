$(function() {
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
