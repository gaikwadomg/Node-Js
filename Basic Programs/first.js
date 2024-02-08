const http = require("http");
http
  .createServer(function (req, res) {
    res.write("Hello I am Om Gaikwad I Can Create Server");
    res.end();
  }).listen(4500);
