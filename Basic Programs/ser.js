const http = require('http');

function om(req, res) {
    res.write("<h1>Hello, world 44=994! OMG </h1>");
    res.end();
}

http.createServer(om).listen(4500);

