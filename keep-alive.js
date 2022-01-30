var http = require("http");
http.createServer(function(req, res){
res.write("Dossier"); 
res.end();
}).listen(8080);