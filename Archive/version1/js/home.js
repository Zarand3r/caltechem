$(document).ready(function() {
  $('#ghost').css('visibility', 'visible');
});

$('#fullpage').fullpage({
  // sectionsColor: ['lightskyblue', '#549755', 'lightskyblue', '#f2f2f2', 'cornflowerblue'],
  sectionsColor: ['lightskyblue', 'steelblue', 'steelblue', 'steelblue', 'steelblue'],
  //options here
  autoScrolling:true,
  scrollOverflow:true,
  scrollHorizontally: true,
  onLeave: function(index, nextIndex, direction){
    if (direction == "down")  {
      $('header').removeClass('nav-down').addClass('nav-up');
    }
    else if (direction == "up"){
      $('header').removeClass('nav-up').addClass('nav-down');
    }
  }
});
