var http = require('http');
var server = http.createServer();
server.on('request', function(reeq,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('hello world !!!');
    res.end();    
});
server.listen(1337,'192.168.33.72');
console.log('server listening ...');
