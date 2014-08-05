// Commands:
//   hubot behead <player> - get a link to the players head

module.exports = function(robot) {
	robot.respond(/behead ([\p{L}\p{N}_]{3,16})[ ]?/i, function(msg){
		msg.reply("http://cravatar.eu/helmhead/"+msg.match[1].trim()+"/600.png");
	});
}