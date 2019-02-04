// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var windowWidth = $(window).width();

$(window).scroll(function(event){
    didScroll = true;
});

$(window).on('resize', function(){
      windowWidth = $(window).width();
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    var navup = 'nav-up';
    if (windowWidth < 800)  {
      navup = 'nav-upper';
    }

    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass(navup);
    }
    else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass(navup).addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
