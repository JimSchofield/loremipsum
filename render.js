var fs = require("fs");

const encodingType = "{'encoding': 'utf8'}";

function view(numberOfCharacters, res) {
	var siteContent = fs.readFileSync('index.html');
	siteContent += fs.readFileSync('footer.html');
  	res.write(siteContent, res);
}

module.exports.view=view;