var render = require("./render.js");


function home(req, res) {
    res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //if request has no query display none
    if (req.url === "/") {
        render.view(0, res);
    } else {
        //else display query number
        var numOfChar;
        numOfChar = req.url.replace("/?numberOfCharacters=","");
        render.view(numOfChar, res); 
        res.end();
    }
}

module.exports.home = home;
