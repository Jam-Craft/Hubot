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
	})
	
	
}