var friends = require("../data/friends");


// routing
module.exports = function(app){

    // get request
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    // post request
    app.post("/api/friends", function(req, res){
        friends.push(req.body);
    });
};