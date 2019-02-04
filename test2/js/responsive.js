
setTimeout(function() {
    $("#mypic").fadeOut();
    $("#preloader").delay(1000).fadeOut("slow");
}, 2000);

$( document ).ready(function() {
  var h = $(window).height();
  var navpos = h - 75;
  var cover = document.getElementById("cover");
  var cover2 = document.getElementById("cover2");
  cover.style.height = navpos + 'px';
  cover2.style.height = navpos + 'px';
  $(window).resize(function() {
    h = $(window).height();
    navpos = h - 75;
    navpos = h - 75;
    cover.style.height = navpos + 'px';
    cover2.style.height = navpos + 'px';
  });

  var nb = $('#navbar');
  var na = $('#navarea');

  if ($(this).scrollTop() < navpos) {
      $("#container").html('<div id="preloader"><img id="mypic" alt ="mypic" src ="images/logo5.png"/></div>');
  }
  $(window).scroll(function () {
      if ($(this).scrollTop() >= navpos) {
          nb.addClass('fixify');
          na.addClass('colorchange');
          $(".content").css("opacity", "0.95");
      }
      else {
          nb.removeClass('fixify');
          na.removeClass('colorchange');
          $(".content").css("opacity", "1","position","absolute");
          cover.style.opacity = $(this).scrollTop() / 800;
      }
  });
  $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html,body').animate({
                      scrollTop: target.offset().top
                  }, 800);
                  return false;
              }
          }
      });
  });
});
