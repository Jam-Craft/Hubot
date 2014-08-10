// Commands:
//   hubot behead <player> - get a link to the players head

module.exports = function(robot) {
	robot.respond(/behead (.*)/i, function(msg){
		msg.reply("http://cravatar.eu/helmhead/"+msg.message.text.split(" ")[2].trim()+"/600.png");
	});

	robot.respond(/uuid me (.*)/i, function(msg){
		request = JSON.stringify({
			names: msg.match[1].split(" ")
		});
		console.log(request);
		robot.http("http://uuid.turt2live.com/uuid").header('Accept', 'application/json').post(request, function(err, res, body){
			if(err){
				msg.reply("Error Occurred Fetching UUIDs: "+err);
				return;
			}
			console.log(res);
			if(res.statusCode != 200) {
				msg.reply("Request didn't come back HTTP 200 :( Code:" + res.statusCode);
				return;
			}
			
			var data = JSON.parse(body);
			console.log(data);
		})
	});
}
