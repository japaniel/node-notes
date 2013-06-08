var restify = require('restify');
var jade = reqire('jade');

var server = restify.createServer();
server.get('/', function (req, res, next) {
	res.send(200, 'Hey, this works');
	return next();
});

server.listen(8003);
