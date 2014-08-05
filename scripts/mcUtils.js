// Commands:
//   hubot behead <player> - get a link to the players head

module.exports = function(robot) {
	robot.respond(/behead (?:[a-z,0-9]+)/i, function(msg){
		msg.reply("http://cravatar.eu/helmhead/"+msg.match[0]+"/600.png");
	});
}