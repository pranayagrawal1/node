var fs = require('fs')

console.log('Starting to read file');

//var contents = fs.readFileSync('./files/abc.txt');
//console.log('Contents: '+  contents);

fs.readFile('./files/abc.txt', function(err, data){
    console.log('Contents: '+  data);
})

console.log('Finished with reading file')