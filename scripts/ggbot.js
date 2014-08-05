// Description:
//  GGGGGGGGGG
//
// Commands:
//  gg - GG
//  wat - watman!
//

module.exports = function(robot) { // Welcome to hubot xD
    
    //GG!
    robot.hear(/\bgg\b/i, function(msg){
        msg.send("http://youtu.be/5es0NNtSNCU");
    });
	
	//wat
	robot.hear(/\bwat\b/i, function(msg){
		msg.send("http://www-static.weddingbee.com/pics/292233/Wat8.jpg")
	});
	
    robot.hear(/\g.*((slain by)|(killed by)|(blew up)|(pummeled by)|(drowned)|(died)|(went up in)|(burned to )|(tried to swim in)|(suffocated in a )|(starved to )|(was pricked to)|(hit the ground too)|(fell out of the)|(was shot by)).*/i,function(msg){
	msg.send("GGGGGG");
    });
	
	
}
