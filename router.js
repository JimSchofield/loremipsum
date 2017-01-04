var render = require("./render.js");


function home(req, res) {
  res.statusCode = 200;
  res.writeHead(200, {'Content-Type': 'text/html'});
  render.view(1000, res);
  res.end();
}

module.exports.home=home;