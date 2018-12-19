$(document).ready(function(){
	online = Math.floor(Math.random() * (5000 - 1)) + 10;
	console.log(online)
	$("#onlinefriends").text("("+online+")")
	$("#messageicon").hover(function(){
		$("ul li ul li").show();
	});

	$(".slidedown").click(function(){
		console.log("lol")
		$(".hidecomments").toggle(1000)
	});
	$(".slidedown2").click(function(){
		console.log("lol")
		$(".hidecomments2").toggle(1000)
	});

});
