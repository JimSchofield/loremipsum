
var fs = require("fs");

function home(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(fs.readFileSync('index.html', {encoding: "utf8"}));
  res.end();
}

module.exports.home=home;