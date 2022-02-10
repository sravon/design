$(document).ready(function(){
	$('.col-md-3').hover(
		//trigger when mouse hover
		function(){
			$(this).animate({
				marginTop: "-=7%",
			},200);
		},
		//trigger when mouse out
		function(){
			$(this).animate({
				marginTop: "0%",
			},200);
		}
	);
});
$(document).ready(function(){
	$('.counter').counterUp({
            delay: 40,
            time: 3000
        });
});