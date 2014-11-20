(function($, undefined) {
  $(document).ready(function() {
    var win = $(window),
      navbar = $('[data-navbar-activate]'),
      navbarHeight = navbar.height(),
      navbarAllowance = navbar.data('navbar-activate') || 100;

    var section = $('.home'),
        // Subtract navbar height for allowances
        sectionHeight = (section.height() - navbarHeight);

    // Check last and current scroll offset
    var lastScrollOffset = win.scrollTop(),
      currentScrollOffset,
      offsetActivation = (navbarHeight + navbarAllowance);

    win.scroll(function toggleNav(e) {
      currentScrollOffset = win.scrollTop();

      if( currentScrollOffset > navbarHeight && currentScrollOffset < sectionHeight )  {
        navbar.fadeOut();
      } else if ( currentScrollOffset <= navbarHeight || currentScrollOffset >= sectionHeight  ) {
        navbar.fadeIn('fast');
      }

      if ( currentScrollOffset >= sectionHeight ) {
        navbar.addClass('is-active');
      } else if ( currentScrollOffset < sectionHeight ) {
        navbar.removeClass('is-active');
      }
    });
  });
})(jQuery);