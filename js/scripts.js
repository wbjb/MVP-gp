online = Math.floor(Math.random() * (6000 - 1)) + 35;
console.log(online)
$("#online").click(function(){
	$("#output").text(online)
});
