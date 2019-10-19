var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

fs.readdir('.', 'utf-8', function(err, files){
	console.log(files);
	if(err) throw err;

	fs.writeFile('dirFiles.txt', files, function(err, data){
		console.log('Pliki zostały zapisane!'.green);
	});
});


/*fs.readFile('./tekst.txt', 'utf-8', function(err, data){
	console.log('Dane przed zapisem!' .blue);
	console.log(data);
	fs.appendFile('./tekst.txt', '\nA tak wygladaja po zapisie!', function(err){
		if(err) throw err;
		console.log('Zapisano!' .blue);	
		fs.readFile('./tekst.txt', 'utf-8', function(err, data){
			console.log('Dane po zapisie' .blue)
			console.log(data);
		});
	});
});*/