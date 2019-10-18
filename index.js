var fs = require('fs');


fs.readFile('./tekst.txt', 'utf-8', function(err, data){
	console.log(data);
});

fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err){
	if(err) throw err;
	console.log('Zapisano!');	
});

