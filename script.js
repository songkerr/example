(function ($) {
  $(document).ready(function(){ 
      
	$(".navbar-custom").hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('.navbar-custom').fadeIn();
			} else {
				$('.navbar-custom').fadeOut();
			}
		});
	});
      
    $("#ex").hide(0).delay(300).fadeIn(1600);
  });
}(jQuery));