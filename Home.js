$(document).ready(function(){
	$(window).scroll(function(){
		var y=$(window).scrollTop();
		$(".welcome").css({
			"background-position":"center "+(y*0.6)+"px"
		});
	});
}); 