(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Skills progress bar animation with intersection observer
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-done');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const percentage = progressBar.getAttribute('data-done');
          
          // Add a small delay for better visual effect
          setTimeout(() => {
            progressBar.style.opacity = '1';
            progressBar.style.width = percentage + '%';
          }, 200);
          
          // Stop observing once animated
          observer.unobserve(progressBar);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px'
    });

    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  }

  // Initialize progress bar animation
  animateProgressBars();

  // Scroll progress bar
  function updateScrollProgress() {
    const docHeight = $(document).height() - $(window).height();
    const scrollTop = $(window).scrollTop();
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    $('.scroll-progress').css('width', Math.min(scrollPercent, 100) + '%');
  }

  // Update scroll progress on scroll
  $(window).on('scroll', updateScrollProgress);
  
  // Initialize scroll progress
  updateScrollProgress();

})(jQuery); // End of use strict
