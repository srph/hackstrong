(function() {
  'use strict';

  var win = $(window),
    innerWrapper = $('.home-inner-wrapper');
  
  // Event Listener
  win.scroll(fadeWrapper);

  function fadeWrapper() {
    var size = win.height();
    var scroll = win.scrollTop();
    var opacity = ( size - scroll ) / size;

    innerWrapper.css({ opacity: opacity });
  }
})();