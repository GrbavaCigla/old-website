$(document).ready(function(){
	var h=$(window).height();
	var w=$(window).width();
	if(h/w>512/217){
		$(".bar").hide();
	}
	$(window).resize(function(){
		var h=$(window).height();
		var w=$(window).width();
		if(h/w>512/217){
			$(".bar").hide();
		}else{
			$(".bar").show();
		}
	});
	
}); 
