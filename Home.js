$(document).ready(function() {
	var links = ["https://api.github.com/users/GrbavaCigla/repos","https://api.github.com/orgs/PiSmartTV/repos"]
	for (var i = links.length - 1; i >= 0; i--) {
		$.getJSON(links[i],function(data){
			data.forEach(function(obj){
				console.log(obj);
				if(obj.description!=null && obj.fork!=true){
					$(".content").append('<div class="grid" data-aos="fade-right" data-aos-duration="800"><p class="title">'+ obj.name + '</p><p>'+ obj.description +'</p><a href="' + obj.html_url+ '">Visit</a></div>')
				}
			});
		});
	}
});