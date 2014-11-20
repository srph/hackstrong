/** Animation library */
(function($) {
  $('[data-animate-scroll]').on('click', function(e) {
    e.preventDefault();

    var element = $(this),
        html = $('html, body'),

    // Target
    target = element.data('animate-scroll'),
    jqTarget = $(target);

    // Halt operations when target is nonexistent
    if ( !jqTarget.length || jqTarget === undefined ) {
      throw new Error('Target does not exist.');
    }

    // Animation speed
    var speed = element.data('scroll-speed') || 750,
        offsetY = jqTarget.offset().top;

    html.animate({ scrollTop: offsetY }, speed);
  });
})(jQuery);