// $(document).ready(function() {
// 	$('#fullpage').fullpage({
//     sectionsColor: ['#f2f2f2', '#4BBFC3', 'lightskyblue', 'whitesmoke'],
// 		//options here
// 		autoScrolling:true,
//     scrollOverflow:true,
// 		scrollHorizontally: true
// 	});
//
// });
// Hide Header on on scroll down

$('#fullpage').fullpage({
  sectionsColor: ['#f2f2f2', 'lightskyblue', '#AFEEEE'],
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
