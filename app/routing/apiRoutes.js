var friends = require("../data/friends");


// routing
module.exports = function(app){

    // get request
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    // post request
    app.post("/api/friends", function(req, res){

        console.log(req.body)
        var newFriendScore; 
        var parsetFriendScore = [];
        var bestMatch ;
        var lowestScore = 100;
        for(var i = 0; i < req.body.score.length; i++){
            parsetFriendScore.push(parseInt(req.body.score[i]))
        }
        newFriendScore = parsetFriendScore.reduce(getsum)
        console.log(newFriendScore)

        for(var i = 0; i < friends.length; i++){
            var oldFriendScore = friends[i].scores.reduce(getsum)
            // math abs() returns the absolute value of a number
            var difference = Math.abs(parseInt(newFriendScore) - parseInt(oldFriendScore))
           if(difference < lowestScore){
               lowestScore = difference;
               bestMatch = friends[i];
           }
            
        }

        console.log(bestMatch)

        res.json(bestMatch);

        function getsum(total, num) {
            return total + num;
          }
    });
};