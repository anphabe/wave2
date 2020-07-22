(function($) {
    // defaults
    $.fn.fullClip = function(options) {
      var settings = $.extend({
        current: 0,
        images: [],
        transitionTime: 1000,
        wait: 3000,
        static: false
      }, options);
      
      var $this = $(this);
      console.log($this);
  
      // preload images
      var i, end;
      for (i = 0, end = settings.images.length; i < end; ++i) {
          new Image().src = settings.images[i];
      }
  
      // sort out the transitions + specify vendor prefixes
      $this
        .css('background-image', 'url(' + settings.images[settings.current] + ')')
        .css('-webkit-transition', + settings.transitionTime + 's ease-in-out')
        .css('-moz-transition', + settings.transitionTime + 'ms ease-in-out')
        .css('-ms-transition', + settings.transitionTime + 'ms ease-in-out')
        .css('-o-transition', + settings.transitionTime + 'ms ease-in-out')
        .css('transition', + settings.transitionTime + 'ms ease-in-out')
  
      // if only one image, set as static background
      if (settings.static) {
        $this
        .css('background-image', 'url(' + settings.images[settings.current] + ')');
        return;
      }
  
      // change the background image
      (function update() {
        settings.current = (settings.current + 1) % settings.images.length;
        console.log($this);
          $this.css('background-image', 'url(' + settings.images[settings.current] + ')');
          setTimeout(update, settings.wait);
      }());
  }}(jQuery));

  jQuery("#xxxx").fullClip(
    {
        images: ['assets/images/tips-for-working-from-anywhere.jpg', 'assets/images/feature-facades-1920x1280.jpg'],
        transitionTime: 2000,
        wait: 5000
    });