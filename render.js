var fs = require("fs");

const encodingType = "{'encoding': 'utf8'}";

function view(numberOfCharacters, res) {
	var siteContent = fs.readFileSync('index.html');

	//place to merge content
	siteContent += selectLorem(20);

	siteContent += fs.readFileSync('footer.html');
  	res.write(siteContent, res);
}

function selectLorem(numberOfCharacters) {
	var lorem = fs.readFileSync('lorem.txt', 'utf8');

	console.log(lorem);

	lorem = lorem.slice(0,numberOfCharacters);

	return lorem;
}

module.exports.view=view;