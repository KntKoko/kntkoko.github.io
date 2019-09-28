$(document).ready(function() {
	$( ".nav" ).mouseenter(function() {
		$( this ).stop().animate({
			opacity: 1,
		}, 250, function() {
		});
	});

	$( ".nav" ).mouseleave(function() {
		$( this ).stop().animate({
			opacity: .5,
		}, 250, function() {
		});
	});

	$( "path" ).mouseenter(function() {
		$( this ).stop().css({fill: "rgba(255,255,255,1)", transition: "0.25s"})
	});

	$( "path" ).mouseleave(function() {
		$( this ).stop().css({fill: "rgba(255,255,255,.5)", transition: "0.25s"})
	});

	$( ".nav_active" ).css('opacity', 1);
});