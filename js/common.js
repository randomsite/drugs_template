$(document).ready(function() {

	$('.small-img').on('click', function(){
		var src = $(this).attr('src');
		// $(this).siblings('.large-img-wr').attr('href', src);
		$(this).siblings('.large-img-wr').find('.large-img').attr('src', src);
		$('#large-img img').attr('src', src);
	});

	$("#toggle").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("on");
		$("#menu").slideToggle("slow");
	});

});