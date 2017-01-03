const http = require('http');
var fs = require("fs");
var router = require("./router.js");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	router.home(req,res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});