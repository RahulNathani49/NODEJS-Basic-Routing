var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    console.log("REQUEST FROM : " + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);

    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/rk/api') {
        var obj = [{ name: 'rk', age: '19', address: '127.0.0.1' }, { name: 'jack', age: '29', address: '127.0.0.1' }];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(obj));
    }

});
server.listen(3000, '127.0.0.1');
console.log("LISTENING TO PORT 3000");