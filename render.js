var fs = require("fs");

const encodingType = "{'encoding': 'utf8'}";

function view(numberOfCharacters, res) {
	var siteContent = fs.readFileSync('index.html');

	siteContent += "<div class='loremText'>";

	//place to merge content
	siteContent += selectLorem(numberOfCharacters);

	siteContent += "</div>";

	siteContent += fs.readFileSync('footer.html');
  	res.write(siteContent, res);
}

function selectLorem(numberOfCharacters) {
	var lorem = fs.readFileSync('lorem.txt', 'utf8');

	lorem = lorem.slice(0, numberOfCharacters);

	lorem.replace(/[\n\r]/g, '<br>')

	return lorem;
}

module.exports.view=view;