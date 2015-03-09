var file = require("fs");
var path = ".";
if( process.argv[2] ) {
	path = process.argv[2];
}
var files = file.readdirSync(path);
for(fn in files){
	console.log(files[fn]);
}

var file = require("fs");

