var path = require("path");

describe("JamBot", function() {
    var robot;
    var user;
    var adapter;

    beforeEach(function() {
        var ready = false;

        runs(function() {
            // create new robot, without http, using the mock adapter
            robot = new Robot(null, "mock-adapter", false, "JamBot");

            robot.adapter.on("connected", function() {
                // only load scripts we absolutely need, like auth.coffee
                process.env.HUBOT_AUTH_ADMIN = "1";
                robot.loadFile(
                    path.resolve(
                        path.join("node_modules/hubot/src/scripts")
                    ),
                    "*"
                );

                // create a user
                user = robot.brain.userForId("1", {
                    name: "jambot-tester",
                    room: "#jambot-test"
                });

                adapter = robot.adapter;
            });

            robot.run();
        });

        waitsFor(function() {
            return ready;
        });
    });

    afterEach(function() {
        robot.shutdown();
    });

    it("is able to send a message", function(done) {
        // here's where the magic happens!
        adapter.on("send", function(envelope, strings) {
            done();
        });

        adapter.send(new TextMessage(user, "Hai"));
    });
});