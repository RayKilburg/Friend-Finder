var path = require("path");

// routing
module.exports = function(app){

    // get request
    app.get("/survey",function(rew, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};