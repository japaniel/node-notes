var restify = require('restify');
var jade = require('jade');

var server = restify.createServer();


server.get('/', restify.serveStatic({directory: './public'}),function (req, res, next) {
	fs.readFile('./index.html', function (err, file) {
		if (err) {
			res.send(500);
			return next();
		}

		res.send({
			code: 200,
			noEnd: true,
		});
		res.send(file);
		res.end();
	});

	return next();
});

server.listen(8003);
