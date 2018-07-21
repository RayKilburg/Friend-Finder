//body-parser
var bodyParser = require('body-parser')
//express
var express = require('express')
var app = express()

 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

//path
var npmPath = require('npm-path')
var PATH = npmPath.PATH // get platform independent PATH key
 
npmPath(function(err, $PATH) {
  
  // Note: current environment is modified!
  console.log(process.env[PATH] == $PATH) // true
  
  console.log($PATH);
});

//

