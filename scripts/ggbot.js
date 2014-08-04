/* Description:
 *  GGGGGGGGGG
 *
 * Commands:
 *  gg - GG
 */
module.exports = function(robot) { // Welcome to hubot xD
    
    //GG!
    robot.hear(/gg/i, function(msg){
        msg.send("http://youtu.be/5es0NNtSNCU");
    });
}