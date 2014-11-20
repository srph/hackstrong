(function($, undefined) {
  $(document).ready(function() {
    var main = $('.home-welcome-header'),
      logo = $('.home-logo'),
      btn = $('.home-btn-interactive'),
      animationEnds = [
      'webkitAnimationEnd',
      'mozAnimationEnd',
      'MSAnimationEnd',
      'oanimationend',
      'animationend'
    ].join(' ');

    var shadow = 'home-welcome-shadow';

    main.one(animationEnds, function bounceInUp (e) {
      logo.addClass('tada animated');
    });

    logo.one(animationEnds, function btnInteractive (e) {
      btn.removeClass('js-home-btn-interactive');
    });

    $('[data-toggle=collapse]').on('click', function() {
      $(this).toggleClass('is-active');
    });
  });
})(jQuery);