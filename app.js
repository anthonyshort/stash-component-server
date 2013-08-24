var express = require('express');
var http = require('http');
var app = express();

app.get('/:user/:name/:version/*', function(req, res){
  res.redirect("http://ntlvmbld01:7990/projects/" + req.params.user + "/repos/" + req.params.name + "/browse/" + req.params[0] + "?at=" + req.params.version + "&raw");
});

http.createServer(app).listen(3000);